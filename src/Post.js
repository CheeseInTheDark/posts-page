import React from 'react'
import moment from 'moment'

export default function Post({ post }) {

    return <div className="post-box">
        <div className="post-text">
            <p className="post-date" id="date-text">{moment(post.timestamp).format("MM/DD/YYYY")} </p>
            <p className="post-name" id="name-text">{post.name}</p>
            <p className="post-message" id="post-text">{post.text}</p>
        </div>
        <div className="post-image-container">
            <img className="post-image" src={post.image} />
        </div>
    </div>
}