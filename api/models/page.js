const mongoose = require('mongoose')

const name = 'Page'

const Schema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  title: {
    type: String,
    index: true,
  },
  url: {
    type: String,
    index: true,
  },
  description: {
    type: String,
    index: true,
  },
  tags: {
    type: [String],
    index: true,
  },
  created_at: {
    type: Number,
    index: true,
    default: Date.now
  }
})

module.exports = new mongoose.model(name, Schema, name)
