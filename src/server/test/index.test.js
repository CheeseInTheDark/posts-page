import request from 'supertest'
import fs from 'fs'

jest.mock('../timestamp', () => () => "timestamp")

jest.mock('../settings', () => ({
    port: 5001,
    staticDirectory: "./temp",
}))

jest.mock('../token-store', () => {
    let acceptedTokens = []
    
    return {
        reset: () => acceptedTokens = [],
        add: token => acceptedTokens.push(token),
        isValid: token => acceptedTokens.indexOf(token) > -1
    }
})

jest.mock('uid-generator', () => function UIDGenerator() {
    return {
        generate: async () => Promise.resolve("token"),
        generateSync: () => "token"
    }
})

describe("app", () => {
    
    let tokenStore
    let subject
    
    beforeEach(async () => {
        tokenStore = require('../token-store')
        subject = await require('../index.js')
        
        fs.mkdirSync('./temp/posts', { recursive: true })
        fs.writeFileSync('./temp/test-file', "test")
    })
    
    afterEach(done => {
        fs.rmdirSync('./temp', { recursive: true, force: true })

        subject.close(() => {
            jest.resetModules()
            done()
        })
    })
    
    describe("GET /post/all", () => {
        beforeEach(() => {
            fs.mkdirSync("./temp/posts/1")
            fs.mkdirSync("./temp/posts/2")
    
            fs.writeFileSync("./temp/posts/1/message.txt", `{"post": 1}`, {recursive: true})
            fs.writeFileSync("./temp/posts/2/message.txt", `{"post": 2}`, {recursive: true})
        })

        test("returns all posts when given valid token", async () => {
            tokenStore.add("token")

            const response = await request(subject)
                .get('/post/all')
                .set('Authorization', "token")
                .send()

            expect(response.text).toEqual(`[{"post":2},{"post":1}]`)
            expect(response.status).toEqual(200)
        })

        test("returns 403 when token is invalid", async () => {
            const response = await request(subject)
                .get('/post/all')
                .set('Authorization', "bad token")
                .send()

            expect(response.text).toBe("")
            expect(response.status).toEqual(403)
        })
    })

    describe("POST /post", () => {
        test("creates a post when given valid token", async () => {
            tokenStore.add("token")

            await request(subject)
                .post('/post')
                .field("visitorMessage", "hi")
                .field("visitorName", "Joe")
                .set('Authorization', "token")
                .attach("file", './temp/test-file')

            const postMessage = JSON.parse(fs.readFileSync("./temp/posts/1/message.txt").toString())

            expect(postMessage).toEqual({
                name: "Joe",
                text: "hi",
                timestamp: "timestamp",
                image: "/posts/1/test-file"
            })

            expect(fs.existsSync("./temp/posts/1/test-file")).toBe(true)
        })

        test("does not create a post when given a bad token", async () => {
            const response = await request(subject)
                .post('/post')
                .field("visitorMessage", "hi")
                .field("visitorName", "Joe")
                .set('Authorization', "token")
                .attach("file", './temp/test-file')

            expect(fs.existsSync("./temp/posts/1")).toBe(false)
            expect(response.status).toBe(403)
        })
    })

    describe("POST /auth", () => {
        test("auth returns 403 if password is wrong", async () => {
            const response = await request(subject)
                .post('/auth')
                .send({
                    password: "LizzieIs16."
                })

            expect(response.status).toBe(403)
        })

        test("auth returns 200 and token if the provided password is correct", async () => {
            const expectedPassword = "LizzieIs16"

            const response = await request(subject)
                .post('/auth')
                .send({
                    password: expectedPassword
                })

            expect(response.status).toBe(200)
            expect(response.header['content-type']).toBe("application/json; charset=utf-8")
            expect(response.body.token).toBe("token")
        })
    })
})