import Post from '../Post'
import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'

const post = {
    name: "ferguson",
    timestamp: "2020-02-01T00:00:00.000Z",
    image: "image url",
    text: "post text"
}

describe(Post, () => {

    let subject

    beforeEach(() => {
        subject = shallow(<Post key={0} post={post}/>)
    })

    test("displays post name", () => {

        expect(subject.find("#name-text").text().trim()).toEqual("ferguson")
    })

    test("displays formatted date", () => {
        const expectedTimeLocal = moment("2020-02-01T00:00:00.000Z")
        const expectedTimeLocalUTC = expectedTimeLocal.subtract(expectedTimeLocal.utcOffset, "minute")

        expect(subject.find("#date-text").text().trim()).toEqual(expectedTimeLocalUTC.format("MM/DD/YYYY"))
    })

    test("displays post text", () => {
        expect(subject.find("#post-text").text().trim()).toEqual("post text")
    })

    test("displays given image", () => {
        expect(subject.find("#post-image")).toHaveProp("src", "image url")
    })
})
