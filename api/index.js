// import modules and load dependencies
const express = require('express')
const config = require('./config')
const router = require('./router')

// initialize api instance
const app = express()

// add configuration
config(app)

// add routes
app.use(router)

// serve api
const port = process.env.PORT || 80

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})