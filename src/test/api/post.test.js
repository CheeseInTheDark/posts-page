import postPost from '../../api/postPost'
import getPosts from '../../api/getPosts'
import axios from 'axios'

const progressCallback = jest.fn()

jest.mock("../../store", () => ({
    __esModule: true,
    default: {
        getState: () => ({ token: "token" })
    }
 }))

describe("post", () => {
    describe("a post", () => {
        beforeEach(async () => {
            jest.spyOn(axios, "post").mockImplementation(() => Promise.resolve())

            await postPost("message", "name", "file", progressCallback)
        })

        test("posts to correct URL", () => {
            expect(axios.post.mock.calls[0][0]).toEqual("/post")
        })
        
        test("posts post data", () => {
            const submittedData = axios.post.mock.calls[0][1]
            
            expect(submittedData.get("visitorMessage")).toEqual("message")
            expect(submittedData.get("visitorName")).toEqual("name")
            expect(submittedData.get("file")).toEqual("file")
        })
        
        test("sends expected headers", () => {
            expect(axios.post.mock.calls[0][2].headers).toEqual({
                'Content-Type': 'multipart/form-data',
                'Authorization': "token"
            }) 
        })

        test("invokes progress callback with integer percent representation of progress", () => {
            const submittedCallback = axios.post.mock.calls[0][2].onUploadProgress

            submittedCallback({ loaded: 5, total: 20 })

            expect(progressCallback).toHaveBeenCalledWith(25)
        })
    })
    
    describe("get all", () => {
        const posts = []
        let result

        beforeEach(async () => {
            jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve({ data: posts }))

            result = await getPosts()
            console.log("before")
        })

        test("returns posts", () => {
            expect(result).toBe(posts)
        })

        test("gets posts", () => {
            expect(axios.get).toHaveBeenCalledWith('/post/all', {
                headers: {
                    'Authorization': 'token'
                }
            })
        })
    })
})