import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0); 

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name); //this will be a rename eventually
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file); 
    formData.append('visitorMessage', document.getElementById("visitorMessage").value);
    formData.append('visitorName', document.getElementById("visitorName").value);
    for (var value of formData.values()) {
      console.log(value); 
   }
   
    
    try {
      const res = await axios.post('/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;
      console.log("resp data: " + res.data);

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
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
      {message ? <Message msg={message} /> : null}
      <form id="postForm" onSubmit={onSubmit}>
        <div className="container">
          <div className="row">
            <div className="form-group col-22">
              <label className="form-group col-8" htmlFor="visitorMessage">Message</label>
              <textarea  className="form-control"rows="4" cols="150" id="visitorMessage" />
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