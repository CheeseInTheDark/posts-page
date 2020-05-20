const express = require('express')
const app = express()
const port = 5000
const fs = require('fs')
const moment = require('moment')

const fileUpload = require('express-fileupload')
const postPath = '../../public/posts'

import auth from './auth'

app.post('/auth', express.json(), auth)

app.get('/', (req, res) => res.send('GREETINGS TERGIVERSE!'))

app.use(express.static('../../public'))
app.use(fileUpload())

app.get('/post/all', (req, res) => {
  const dirs = fs.readdirSync(postPath) 
  const posts =  dirs.map(function (dir){
    console.log("mapped dir: " , dir)
    const fileText = fs.readFileSync('../../public/posts/'+ dir +'/message.txt')
    return JSON.parse(fileText.toString())
  })
  console.log("final list of posts line 32" , posts)
  return res.status(200).send(JSON.stringify(posts))
})

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
    messageData.image='/posts/'+newDir+'/'+file.name
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
  return res.status(200).send()
})

module.exports = new Promise(resolve => {
  const server = app.listen(5000, () => resolve(server))
})
