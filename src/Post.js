import React from 'react'
import moment from 'moment'

export default function Post({ post }) {
    return <div>
            <img id="post-image" src={ post.image }/>
            <div id="date-text">{ moment(post.timestamp).format("MM/DD/YYYY") } </div>
            <div id="name-text">{ post.name }</div>
            <div id="post-text">{ post.text }</div>
        </div>
}