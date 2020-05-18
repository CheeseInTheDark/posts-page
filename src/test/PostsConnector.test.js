import PostsConnector from '../PostsConnector'
import Posts from '../Posts'

import { createStore } from 'redux'
import React from 'react'
import { Provider } from 'react-redux'

jest.mock("../Posts", () => ({
    __esModule: true,
    default: () => <div/>
}))

describe("PostsConnector", () => {

    const expectedPosts = []

    let store = createStore((state = {
        posts: expectedPosts
    }) => state)

    let subject

    beforeEach(() => {
        subject = mount(
            <Provider store={ store }>
                <PostsConnector/>
            </Provider>
        )
    })

    test("uses posts from store", () => {
        expect(subject.find(Posts)).toHaveProp("posts", expectedPosts)
    })
})