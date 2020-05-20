import React from 'react'
import App from '../App'
import LoginConnector from '../LoginConnector'
import PostsConnector from '../PostsConnector'

describe(App, () => {
    test('shows login when route is login', () => {
        const subject = shallow(<App route={ "login" }/>)
        
        expect(subject.find(LoginConnector)).toExist()
        expect(subject.children()).toHaveLength(1)
    })

    test('shows posts when route is posts', () => {
        const subject = shallow(<App route={ "posts" }/>)

        expect(subject.find(PostsConnector)).toExist()
        expect(subject.children()).toHaveLength(1)
    })
})