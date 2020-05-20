import axios from 'axios';


function  postPost(visitorMessage, visitorName, file, setUploadPercentage){

const formData = new FormData()
formData.append("visitorName", visitorName)
formData.append("visitorMessage",visitorMessage)
formData.append("file", file)

return axios.post('/post', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: progressEvent => {
      setUploadPercentage(
        parseInt(
          Math.round((progressEvent.loaded * 100) / progressEvent.total)
        )
      );
    
    }
  }) 
}

export default postPost