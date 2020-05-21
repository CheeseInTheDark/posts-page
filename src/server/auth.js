const tokenStore = require('./token-store')
const UIDGenerator = require('uid-generator')

const generator = new UIDGenerator()

module.exports = function auth(req, res) {
    req.body.password == "LizzieIs16" ? success(res) : failure(res)
}

function success(res) {
    const token = generator.generateSync()
    tokenStore.add(token)

    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({ token })
}

function failure(res) {
    res.status(403).send()
}