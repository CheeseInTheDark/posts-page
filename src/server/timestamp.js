const moment = require('moment')

module.exports = function timestamp() {
    return moment.utc().format('YYYY-MM-DDTHH:mm:ss.SSS\\Z')
}