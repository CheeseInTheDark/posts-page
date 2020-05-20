import loadPosts from '../../sagas/load-posts'
import getPosts from '../../api/getPosts'

import { fork, call, put } from 'redux-saga/effects'

jest.mock('../../api/getPosts', () => {
    let requestsSucceed = true

    const succeed = () => requestsSucceed = true
    const fail = () => requestsSucceed = false
    const getPosts = () => requestsSucceed ? Promise.resolve("posts") : Promise.reject()

    getPosts.fail = fail
    getPosts.succeed = succeed

    return {
        __esModule: true,
        default: getPosts
    }
})

describe("load-posts saga", () => {
    test("sets posts on success", () => {
        getPosts.succeed()

        const iterator = loadPosts()

        expect(iterator.next().value).toEqual(call(getPosts))
        expect(iterator.next("posts").value).toEqual(put({ type: "LOAD_POSTS", value: "posts" }))
    })
})