import login from '../../sagas/login'

import subject from '../../sagas/watch-login'

import { takeEvery } from 'redux-saga/effects'

describe("watchLogin saga", () => {
    test("watches LOGIN", () => {
        const iterator = subject()
        expect(iterator.next().value).toEqual(takeEvery("LOGIN", login))
    })
})