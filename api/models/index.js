const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.Promise = require('bluebird')

module.exports = {
  Page: require('./page'),
  Scrap: require('./scrap'),
  Tag: require('./tag'),
  ctx: async cb => {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    cb()
  }
}