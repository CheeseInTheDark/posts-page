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
        fs.writeFileSync('./test-file', "test")

        subject = await require('../index.js')
        fs.mkdirSync('./temp/posts', { recursive: true })
    })
    
    afterEach(done => {
        fs.rmdirSync('./temp', { recursive: true, force: true })

        subject.close(() => {
            jest.resetModules()
            done()
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
                .attach("file", './test-file')

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
                .attach("file", './test-file')

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