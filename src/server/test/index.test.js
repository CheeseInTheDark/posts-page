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
        delete require.cache[require.resolve('../index')]
        subject = await require('../index').default
    })

    afterEach(done => {
        subject.close(done)
    })
    
    test("auth returns 403 if password is wrong", async () => {
        const response = await request(subject)
            .post('/auth')
            .send({
                password: "LizzieIs16."
            })

        expect(response.status).toBe(403)
    })

    test("auth returns 8200 and token if the provided password is correct", async () => {
        const expectedPassword = "LizzieIs16"

        const response = await request(subject)
            .post('/auth')
            .send({
                password: expectedPassword
            })

            console.log(response)
            expect(response.status).toBe(200)
            expect(response.header['content-type']).toBe("application/json; charset=utf-8")
            expect(response.body.token).toBe("token")
    })
})