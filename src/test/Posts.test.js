import Posts from '../Posts'
import Post from '../Post'
import React from 'react'

import { shallow } from 'enzyme'

const posts = [
    "first post",
    "second post"
]

describe(Posts, () => {
    test("displays child Posts", () => {
        const subject = shallow(<Posts posts={posts}/>)

        expect(subject).toContainMatchingElements(2, Post)
    })
})
