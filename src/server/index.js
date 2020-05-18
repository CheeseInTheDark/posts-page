const express = require('express')
const app = express()
const port = 3001

import auth from './auth'

app.get('/', (req, res) => res.send('GREETINGS TERGIVERSE!'))

app.post('/auth', express.json(), auth)

export default new Promise(resolve => {
    const server = app.listen(port, () => resolve(server))
})