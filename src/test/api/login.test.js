import subject from '../../api/login'
import axios from 'axios'

describe("login api", () => {

    test("sends password", () => {
        jest.spyOn(axios, "post")

        subject.post("password")
    
        expect(axios.post).toHaveBeenCalledWith("/auth", { password: "password" })
    })

    test("returns token from response", async () => {
        jest.spyOn(axios, "post").mockImplementation(() => Promise.resolve({ data: "token" }))

        const result = await subject.post("password")

        expect(result).toEqual("token")
    })

    test("does not consume exceptions", async () => {
        jest.spyOn(axios, "post").mockImplementation(() => Promise.reject())

        try {
            await subject.post()
            fail("Request failure was not propagated to caller")
        } catch(error) {}
    })
})