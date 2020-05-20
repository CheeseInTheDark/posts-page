import AppConnector from '../AppConnector'
import App from '../App'

import { createStore } from 'redux'
import React from 'react'
import { Provider } from 'react-redux'

jest.mock("../App", () => ({
    __esModule: true,
    default: () => <div/>
}))

describe("AppConnector", () => {

    let store = createStore(() => ({
        route: "route"
    }))

    let subject

    beforeEach(() => {
        subject = mount(
            <Provider store={ store }>
                <AppConnector/>
            </Provider>
        )
    })

    test("maps route to state", () => {
        expect(subject.find(App)).toHaveProp("route", "route")
    })
})