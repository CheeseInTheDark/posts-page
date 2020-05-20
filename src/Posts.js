import React from 'react';
import Post from './Post'
import './Posts.css';
import FileUpload from './components/FileUpload';

function Posts({ posts }) {
    return <div>
        <div id="leftColumn">
            <p className="scriptTitle">Happy 16th</p>
            <img src="bee.png" width="100" />
            <p className="scriptTitle">Day Elizabeth!</p>
        </div>
        <div className="posts centerDiv"> 
            <FileUpload />
            {posts.map((post, index) => <Post key={index} post={post} />)}
        </div>
    </div>
}

export default Posts