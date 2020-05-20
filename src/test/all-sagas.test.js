import subject from '../all-sagas'
import loginSaga from '../sagas/login'

const middleware = {
    run: jest.fn()
}

describe('sagas', () => {
    beforeEach(() => {
        subject.runUsing(middleware)
    })

    test('runUsing runs LOGIN saga', () => {
        expect(middleware.run).toHaveBeenCalledWith(loginSaga)
    })
})