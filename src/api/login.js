import axios from 'axios'

async function post(password) {
    const response = await axios.post('/auth', { password })
    return response.data.token
}

export default { post }