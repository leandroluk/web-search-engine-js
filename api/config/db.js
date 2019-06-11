const mongoose = require('mongoose')

module.exports = async next => {
  try {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useFindAndModify', false)
    mongoose.set('useCreateIndex', true)
    mongoose.Promise = require('bluebird')

    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    console.log('db connected')
  } catch (error) {
    console.error('db not connected')
    throw error
  } finally {
    return next()
  }
}
