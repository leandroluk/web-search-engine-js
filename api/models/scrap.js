const mongoose = require('mongoose')

const name = 'Scrap'

const Schema = new mongoose.Schema({
  query: {
    type: String,
    index: true,
  },
  start: {
    type: Number,
    index: true,
    default: 0,
  },
})

module.exports = new mongoose.model(name, Schema, name)
