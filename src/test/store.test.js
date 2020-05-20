const redux = require('redux')
import createSagaMiddleware from 'redux-saga'
import expectedReducer from '../reducer'
import sagas from '../all-sagas'

const expectedStore = {}
const expectedMiddleware = { run: jest.fn() }

jest.mock('redux-saga', () => ({
    __esModule: true,
    default: () => "expected middleware"
}))

describe('store', () => {

    let subject

    beforeEach(() => {
        jest.spyOn(sagas, "runUsing").mockImplementation(() => {})

        jest.spyOn(redux, "applyMiddleware").mockImplementation(middleware => 
            middleware == "expected middleware" ? expectedMiddleware : undefined)

        jest.spyOn(redux, "createStore").mockImplementation((reducer, middleware) => {
            if (reducer === expectedReducer && middleware === expectedMiddleware) {
                return expectedStore
            }
        })

        subject = require('../store').default
    })

    test('is created', () => {
        expect(subject).toBe(expectedStore)
    })

    test('runs sagas', () => {
        expect(sagas.runUsing).toHaveBeenCalledWith("expected middleware")
    })
})