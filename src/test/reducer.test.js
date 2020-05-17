describe("reducer", () => {

    const subject = require('../reducer')

    test("returns initial state with posts in it", () => {
        const state = subject()

        expect(state).toEqual({
            posts: [{
                image: "./derp.png",
                timestamp: "2020-01-01T00:00:00.0000Z",
                name: "Blarg",
                text: "Test"
            }, {
                image: "./derp.png",
                timestamp: "2020-02-02T00:00:00.0000Z",
                name: "Flerg",
                text: "Test Again"
            }]
        })
    })
})