describe("reducer", () => {

    const subject = require('../reducer')

    const previousState = { oldValue: "old" }

    test("returns initial state", () => {
        const state = subject(undefined, {type: undefined})

        expect(state).toEqual({
            posts: [],
            token: undefined
        })
    })

    test("SET_TOKEN sets token and login failed state", () => {
        const state = subject(previousState, {
            type: "SET_TOKEN",
            value: "token"
        })

        expect(state).toEqual({
            oldValue: "old",
            loginFailed: false,
            token: "token"
        })
    })

    test("LOGIN_FAILED sets login failed state", () => {
        const state = subject(previousState, {
            type: "LOGIN_FAILED"
        })

        expect(state).toEqual({
            oldValue: "old",
            loginFailed: true
        })
    })
})