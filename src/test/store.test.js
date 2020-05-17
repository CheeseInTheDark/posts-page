const redux = require('redux')
import expectedReducer from '../reducer'

const expectedStore = {}

describe('store', () => {
    test('is created', () => {
        jest.spyOn(redux, "createStore").mockImplementation(reducer => {
            if (reducer === expectedReducer) {
                return expectedStore
            }
        })

        let subject = require('../store').default

        expect(subject).toBe(expectedStore)
    })
})