import axios from 'axios';

function postPost(visitorMessage, visitorName, file, setUploadPercentage) {

  const store = require('../store').default
  const formData = new FormData()
  formData.append("visitorName", visitorName)
  formData.append("visitorMessage",visitorMessage)
  formData.append("file", file)

  return axios.post('/post', formData, {
    headers: {
      'Authorization': store.getState().token,
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: progressEvent => {
      setUploadPercentage(
        parseInt(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        )
      )
    
    }
  }) 
}

export default postPost