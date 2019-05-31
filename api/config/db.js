const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.Promise = require('bluebird')

module.exports = next => {

  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

  console.log(
    !mongoose.connection.readyState ?
      'db connected' :
      'failed on connected to server'
  )

  return next()
}
