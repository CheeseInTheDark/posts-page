const express = require('express')
const app = express()
const port = 5000

const fileUpload = require('express-fileupload')

app.get('/', (req, res) => res.send('GREETINGS TERGIVERSE!'))

app.use(express.static('../../public'))
app.use(fileUpload())

// Upload Endpoint
app.post('/post', (req, res) => {
 // if (req.files === null) {
  //  return res.status(400).json({ msg: 'No file uploaded' })
  //}

  
  const visitorMessage = req.visitorMessage
  const visitorName = req.visitorName
  if (req.files === null) {   
    res.json({  
      visitorMessage:  visitorMessage , 
      visitorName: visitorName })

  } else {
  const file = req.files.file  
  file.mv(`${__dirname}/../../public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    res.json({ 
      fileName: file.name, 
      filePath: `../../uploads/${file.name}`, 
      visitorMessage:  visitorMessage , 
      visitorName: visitorName })
  })
}

})

app.listen(port, () => console.log('Server Started...'))
