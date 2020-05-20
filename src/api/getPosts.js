import axios from 'axios';


function getPosts(){
 const allPosts = []
 return axios.get('/post/all')
  .then(function (response) {
    console.log("response from getPosts.js" , response.data);
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
 
}

export default getPosts