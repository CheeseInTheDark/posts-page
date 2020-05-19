import LoginConnector from '../LoginConnector'
import Login from '../Login'

import { createStore } from 'redux'
import React from 'react'
import { Provider } from 'react-redux'

jest.mock("../Login", () => ({
    __esModule: true,
    default: () => <div/>
}))

describe("LoginConnector", () => {

    let store = createStore(() => {})
    jest.spyOn(store, "dispatch")
    let subject

    beforeEach(() => {
        subject = mount(
            <Provider store={ store }>
                <LoginConnector/>
            </Provider>
        )
    })

    test("dispatches LOGIN action", () => {
        subject.find(Login).props().login("password")

        expect(store.dispatch).toHaveBeenCalledWith({ type: "LOGIN", value: "password" })
    })
})