import login from '../../sagas/login'
import loginApi from '../../api/login'

import { takeEvery, call, put } from 'redux-saga/effects'

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
    test("sets token on success", () => {
        loginApi.succeed()

        const iterator = login()

        expect(iterator.next().value).toDeepEqual(takeEvery("LOGIN"))
        expect(iterator.next().value).toDeepEqual(call(loginApi, "password"))
        expect(iterator.next().value).toDeepEqual(put({ type: "LOGIN", value: "token" }))
    })
})