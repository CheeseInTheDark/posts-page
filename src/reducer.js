const INITIAL_STATE = { 
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
}

module.exports = function reduce(state = INITIAL_STATE, action) {
    return state
}