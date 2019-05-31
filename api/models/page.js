const mongoose = require('mongoose')
const tagName = require('./tag').name

const name = 'Page'

const Schema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
  },
  link: {
    type: String,
    index: true,
  },
  description: {
    type: String,
    index: true,
  },
  tags: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: tagName
  },
  created_at: {
    type: Number,
    index: true,
    default: Date.now
  }
})

module.exports = new mongoose.model(name, Schema, name)
