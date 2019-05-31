const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
  if (mongoose.connection.readyState)
    console.log('database is connected')
  else
    console.error('failed on connected to server')
}
