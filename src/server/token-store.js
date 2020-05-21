const tokenExpirationTimeMin = 20
const tokenExpirationTimeMs = tokenExpirationTimeMin * 60 * 1000

let tokens = []

function isValid(token) {
    return tokens.indexOf(token) > -1
}

function add(token) {
    tokens.push(token)
    setTimeout(() => remove(token), tokenExpirationTimeMs)
}

function remove(token) {
    tokens = tokens.filter(toCheck => token !== toCheck)
}

module.exports = {
    isValid,
    add
}