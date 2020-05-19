const express = require('express')
const app = express()
const port = 5000
const fs = require('fs')
const moment = require('moment')

const fileUpload = require('express-fileupload')
const postPath = '../../public/posts'

app.get('/', (req, res) => res.send('GREETINGS TERGIVERSE!'))

app.use(express.static('../../public'))
app.use(fileUpload())

// Upload Endpoint
app.post('/post', (req, res) => {  
  const dirs =   fs.readdirSync(postPath) 
  const newDir = (dirs.length + 1).toString() 

  fs.mkdir(postPath+'/'+newDir, { recursive: true }, (err) => {
    if (err) throw err;
  }); 
  
  const visitorMessage = req.body.visitorMessage
  const visitorName = req.body.visitorName 
  const visitDate = moment().toISOString()
  const messageData = {
    name: visitorName, 
    text: visitorMessage, 
    timestamp: visitDate
  }

  if (req.files) {    
    const file = req.files.file 
    messageData.image='/posts/'+file.name
    file.mv(`${__dirname}/../../public/posts/${newDir}/${file.name}`, err => {
      if (err) {
        console.error(err)
        return res.status(500).send(err)
      }
    })
  }
  var messageJSON = JSON.stringify(messageData);
  console.log("msg data: " + messageJSON)
  fs.writeFile('../../public/posts/'+ newDir + '/message.txt', messageJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
})

app.listen(port, () => console.log('Server Started...'))
