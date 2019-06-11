const mongoose = require('mongoose')

const name = 'Scrap'

const Schema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    index: true,
  },
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
