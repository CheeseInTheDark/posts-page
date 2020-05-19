import request from 'supertest'

jest.mock('uid-generator', () => ({
    __esModule: true,
    default: function UIDGenerator() {
        return {
            generate: async () => Promise.resolve("token"),
            generateSync: () => "token"
        }
    }
}))

describe("app", () => {
    let subject
    
    beforeEach(async () => {
        subject = await require('../index.js')
    })
    
    afterEach(done => {
        subject.close(() => {
            jest.resetModules()
            done()
        })
    })
    
    describe("auth", () => {
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