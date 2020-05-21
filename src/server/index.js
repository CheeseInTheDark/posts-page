const path = require('path')
const express = require('express')
const fs = require('fs')
const app = express()

const auth = require('./auth')
const settings = require('./settings')
const staticDir = settings.staticDirectory
const postPath = path.join(staticDir, 'posts')
const timestamp = require('./timestamp')
const tokenStore = require('./token-store')

const fileUpload = require('express-fileupload')

app.post('/auth', express.json(), auth)

app.get('/', (req, res) => res.send('GREETINGS TERGIVERSE!'))

app.use(express.static(staticDir))
app.use(fileUpload())
 
app.get('/post/all', (req, res) => {
  console.log(req.headers.authorization)
  if (!tokenStore.isValid(req.headers.authorization)) {
    return res.status(403).send()
  }

  const dirs = fs.readdirSync(postPath) 
  const posts =  dirs.reverse().map(function (dir){
    const fileText = fs.readFileSync(path.join(postPath, dir, 'message.txt'))
    return JSON.parse(fileText.toString())
  })
  return res.status(200).send(JSON.stringify(posts))
})

app.post('/post', (req, res) => {
  
  if (!tokenStore.isValid(req.headers.authorization)) {
    return res.status(403).send()
  }

  const dirs =   fs.readdirSync(postPath) 
  const newDir = (dirs.length + 1).toString()

  fs.mkdir(path.join(postPath, newDir), { recursive: true }, (err) => {
    if (err) throw err;
  }); 
  
  const visitorMessage = req.body.visitorMessage
  const visitorName = req.body.visitorName 
  const messageData = {
    name: visitorName, 
    text: visitorMessage, 
    timestamp: timestamp()
  }

  if (req.files) {    
    const file = req.files.file 
    messageData.image=`/posts/${newDir}/${file.name}`
    const imagePath = path.join(postPath, newDir, file.name)

    file.mv(imagePath, err => {
      if (err) {
        console.error(err)
        return res.status(500).send(err)
      } 
    })
  }

  const messageJSON = JSON.stringify(messageData);

  fs.writeFile(path.join(postPath, newDir,'message.txt'), messageJSON, (err) => {
    if (err) throw err
  })
  return res.status(200).send()
})

module.exports = new Promise(resolve => {
  const server = app.listen(5000, () => resolve(server))
})
