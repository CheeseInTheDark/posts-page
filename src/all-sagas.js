import watchLogin from './sagas/watch-login'

function runUsing(middleware) {
    middleware.run(watchLogin)
}

export default {
    runUsing
}