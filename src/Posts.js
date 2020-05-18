import React from 'react';
import Post from './Post'

function Posts({ posts }) {
    return <div>
            { posts.map((post, index) => <Post key={ index } post={ post } />)}
        </div>
}

export default Posts