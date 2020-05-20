import loginSaga from './sagas/login'

function runUsing(middleware) {
    middleware.run(loginSaga)
}

export default {
    runUsing
}