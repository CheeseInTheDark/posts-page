import UIDGenerator from 'uid-generator'

const generator = new UIDGenerator()

export default function auth(req, res) {
    req.body.password == "LizzieIs16" ? success(res) : failure(res)
}

function success(res) {
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
        .send({
            token: generator.generateSync()
        })
}

function failure(res) {
    res.status(403).send()
}