const INITIAL_STATE = { 
    posts: []
}
module.exports = function reduce(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_POSTS': 
          return Object.assign({}, state, { posts: action.value}) 
    }
    return state
}