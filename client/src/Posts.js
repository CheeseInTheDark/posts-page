import React from 'react';
import Post from './Post'
import './Posts.css';
import FileUpload from '../src/components/FileUpload';

function Posts({ posts }) {
    return <div>
        <FileUpload />
        <div className="posts centerDiv">
        <p className='scriptTitle'>Happy 16th Birthday, Elizabeth!</p>
            { posts.map((post, index) => <Post key={ index } post={ post } />)}
        </div>
        </div>
}

export default Posts