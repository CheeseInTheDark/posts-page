describe("reducer", () => {

    const subject = require('../reducer')

    const previousState = { oldValue: "old" }
    
    test("returns initial state", () => {
        const state = subject(undefined, {type: undefined})
        
        expect(state).toEqual({
            posts: [],
            route: "login"
        })
    })
    
    test("ROUTE_POSTS updates route to posts", () => {
        const state = subject(previousState, {
            type: "ROUTE_POSTS"
        })

        expect(state).toEqual({
            oldValue: "old",
            route: "posts"
        })
    })

    test("SET_TOKEN sets token, login failed state", () => {
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