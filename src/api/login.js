import axios from 'axios';


function post(password) {
    return axios.post('/auth', {password: password})
    .then(function (response) {
        console.log("response data from api/login.js", response.data)
      return response.data
    });
}

export default {
    post
}