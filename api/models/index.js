const mongoose = require('mongoose')

module.exports = {
  Page: require('./page'),
  Scrap: require('./scrap'),
  ctx: async cb => {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useFindAndModify', false)
    mongoose.set('useCreateIndex', true)

    mongoose.Promise = require('bluebird')

    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    cb()
  }
}