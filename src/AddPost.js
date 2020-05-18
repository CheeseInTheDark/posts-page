import React from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css'

function AddPost(props) {
  return (
    <div className="AddPost">
      <div id="root"> 
        <div className="centerDiv">
          <div id="loginBox">
            <p className="scriptTitle centered">Add a Photo and Birthday Message!</p> 
            <p>
              <label>Add a Photo</label><br /><input type="file" id="fileUpload" />
            </p>
            <p>
              <label>Message</label><br /><textarea rows="6" cols="150" id="visitorMessage" />
            </p>
            <button id="addPost">GO!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
