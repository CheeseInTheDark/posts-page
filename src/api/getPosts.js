import axios from 'axios';


function getPosts(){
 const allPosts = []
 return axios.get('/post/all')
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
  });
 
}

export default getPosts