// import modules and load dependencies
const express = require('express')
const config = require('./config')
const router = require('./router')

// initialize api instance
const api = express.app()

// add configuration
config(api)

// add routes


// serve api
