import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import getPosts from '../api/getPosts'
import store from '../store';
import postPost from '../api/postPost'


const FileUpload = () => {
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [message, setMessage] = useState('')
  const [uploadPercentage, setUploadPercentage] = useState(0)

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault(); 
    let visitorMessage = document.getElementById("visitorMessage").value
    let visitorName = document.getElementById("visitorName").value
    
  try {
      await postPost(visitorMessage, visitorName, file, setUploadPercentage)
      setMessage('Your Birthday Message has been Saved!');
      document.getElementById("visitorMessage").value = "";
      document.getElementById("visitorName").value = "";
      setTimeout(() => setUploadPercentage(0), 3000);
      let updatedPosts =  await getPosts() 
      store.dispatch({
        type: 'LOAD_POSTS',
        value: updatedPosts
      })
    } catch (err) { 
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      <form id="postForm" onSubmit={onSubmit}>
        <div className="container">
          <div className="row">
            {message ? <Message msg={message} /> : null}
            <p className="scriptTitle centered">Add a Photo and Birthday Message!</p>
          </div>
          <div className="row">
            <div className="form-group col-22">
              <label className="form-group col-8" htmlFor="visitorMessage">Message</label>
              <textarea className="form-control" rows="4" cols="150" id="visitorMessage" />
            </div>
          </div>
          <div className="row">
            <label className="form-group ml-3">Share a Picture</label>
            <div className="form-group col-4 custom-file ml-3 mr-5">
              <input
                type='file'
                className='custom-file-input'
                id='customFile'
                onChange={onChange}
              />
              <label className='form-group custom-file-label' htmlFor='customFile'>
                {filename}
              </label>
            </div>
            <label className='form-group ml-3' htmlFor="visitorName">From</label>
            <div className="form-group col-3">
              <input type="text" className="form-control" id="visitorName" placeholder="Your Name" />
            </div>
            <input
              type='submit'
              value='Send!'
              className='btn btn-secondary'
            />
          </div>
          <Progress percentage={uploadPercentage} />
          <br />
        </div>
      </form>
    </Fragment>
  );
};

export default FileUpload;