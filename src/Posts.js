import React from 'react';
import Post from './Post'
import './Posts.css';

function Posts({ posts }) {
    return <div className="posts centerDiv">
        <p className='scriptTitle'>Happy 16th Birthday, Elizabeth!</p>
            { posts.map((post, index) => <Post key={ index } post={ post } />)}
        </div>
}

export default Posts