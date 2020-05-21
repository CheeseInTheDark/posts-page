import React from 'react'
import moment from 'moment'

export default function Post({ post }) {

    return <div className="card">
      {post.image  == null ? '' : <img className="card-img-top img-fluid" src={post.image} alt="YAY!" />}
      <div className="card-block">
        <h4 className="card-title">{post.name}</h4>
        <p className="card-text">{post.text} - {moment(post.timestamp).format("MM/DD/YYYY")} </p>
      </div>
    </div>

}