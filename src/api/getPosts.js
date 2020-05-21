import axios from 'axios';


async function getPosts() {
  const store = require('../store').default
  try {
    const response = await axios.get('/post/all', {
      headers: {
        Authorization: store.getState().token
      }
    })
    console.log("Derp")
    return response.data
  } catch(error) {
    console.log(error)
  }
}

export default getPosts