const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

import auth from './auth'

app.post('/auth', express.json(), auth)

app.get('/', (req, res) => res.send('GREETINGS TERGIVERSE!'))

app.use(express.static('../../public'))
app.use(fileUpload())

app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' })
  }

  const file = req.files.file

  file.mv(`${__dirname}/../../public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }

    res.json({ fileName: file.name, filePath: `../../uploads/${file.name}` })
  })
})

module.exports = new Promise(resolve => {
  const server = app.listen(5000, () => resolve(server))
})
