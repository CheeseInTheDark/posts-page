import Login from '../Login'
import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'

const login = jest.fn()

describe(Login, () => {

    let subject

    beforeEach(() => {
        subject = shallow(<Login login={ login } />)
    })

    test("calls login on Login click", () => {
        subject.find("#inputPassword").simulate("change", {target: {value: "password"}} )

        subject.find("#login-button").simulate("click")

        expect(login).toHaveBeenCalledWith("password")
    })
})