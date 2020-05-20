describe("reducer", () => {

    const subject = require('../reducer')

    test("returns initial state with no posts in it", () => {
        const state = subject(undefined, {type: undefined})

        expect(state).toEqual({posts: []})
    })
})