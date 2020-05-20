import subject from '../all-sagas'
import watchLogin from '../sagas/watch-login'

const middleware = {
    run: jest.fn()
}

describe('sagas', () => {
    beforeEach(() => {
        subject.runUsing(middleware)
    })

    test('runUsing runs LOGIN saga', () => {
        expect(middleware.run).toHaveBeenCalledWith(watchLogin)
    })
})