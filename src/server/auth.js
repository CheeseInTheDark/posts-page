import UIDGenerator from 'uid-generator'

const generator = new UIDGenerator()

export default function auth(req, res) {
    console.log(req.body.password)
    req.body.password == "LizzieIs16" ? success(res) : failure(res)
}

function success(res) {
    console.log("success")
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
        .send({
            token: generator.generateSync()
        })
}

function failure(res) {
    console.log("failure")
    res.status(403).send()
}