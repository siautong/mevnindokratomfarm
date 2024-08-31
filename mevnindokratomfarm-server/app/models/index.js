const dbConfig = require('../../config/db.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.products = require('./product.model')(mongoose)
db.user = require('./user.model')(mongoose)
db.staff = require('./staff.model')(mongoose)

module.exports = db
