import Login from '../Login'
import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'

const login = jest.fn()

describe(Login, () => {

    test("calls login on Login click", () => {
        const subject = shallow(<Login login={ login } loginFailed= { false } />)

        subject.find("#inputPassword").simulate("change", {target: {value: "password"}} )
        subject.find("#login-button").simulate("click")

        expect(login).toHaveBeenCalledWith("password")
    })

    test("shows error message when login has failed", () => {
        const subject = shallow(<Login login={ login } loginFailed= { true } />)

        expect(subject.find("#login-failure-message")).toExist()
    })

    test("hides error message when login has not failed", () => {
        const subject = shallow(<Login login={ login } loginFailed= { false } />)

        expect(subject.find("#login-failure-message")).not.toExist()
    })
})