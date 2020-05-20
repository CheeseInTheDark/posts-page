const INITIAL_STATE = { 
    posts: []
}
module.exports = function reduce(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_POSTS': 
            return Object.assign({}, state, { posts: action.value }) 
        case 'SET_TOKEN':
            return Object.assign({}, state, {
                 token: action.value,
                 loginFailed: false
            }) 
        case 'LOGIN_FAILED':
            return Object.assign({}, state, { loginFailed: true })
    }
    return state
}