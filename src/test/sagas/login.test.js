import login from '../../sagas/login'
import loadPosts from '../../sagas/load-posts'
import loginApi from '../../api/login'

import { fork, call, put } from 'redux-saga/effects'

jest.mock('../../api/login', () => {
    let loginsSucceed = true

    const succeed = () => loginsSucceed = true
    const fail = () => loginsSucceed = false
    const post = password => loginsSucceed ? Promise.resolve("token") : Promise.reject()

    return {
        __esModule: true,
        default: {
            succeed,
            fail,
            post
        }
    }
})

describe("login saga", () => {
    test("sets token on success then navigates to posts", () => {
        loginApi.succeed()

        const iterator = login({ type: "LOGIN", value: "password" })

        expect(iterator.next().value).toEqual(call(loginApi.post, "password"))
        expect(iterator.next("token").value).toEqual(put({ type: "SET_TOKEN", value: "token" }))
        expect(iterator.next().value).toEqual(fork(loadPosts))
        expect(iterator.next().value).toEqual(put({ type: "ROUTE_POSTS" }))
    })

    test("dispatches failed login on failure", () => {
        loginApi.succeed()

        const iterator = login({ type: "LOGIN", value: "password" })

        expect(iterator.next().value).toEqual(call(loginApi.post, "password"))
        expect(iterator.throw(new Error()).value).toEqual(put({ type: "LOGIN_FAILED" }))
    })
})