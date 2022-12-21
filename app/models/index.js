const dbconfig = require('../config/database')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('strictQuery', false)

module.exports = {
  mongoose: mongoose,
  url: dbconfig.url,
  movies: require('./movies.model.js')(mongoose)
}