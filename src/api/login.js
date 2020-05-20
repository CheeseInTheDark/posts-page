import axios from 'axios';

async function post(password) {
    const response = await axios.post('/auth', {password: password})
    return response.data
}

export default { post }