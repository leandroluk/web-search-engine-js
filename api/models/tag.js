const mongoose = require('mongoose')

const name = 'Tag'

const Schema = new mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },
  word: {
    type: String,
    index: true,
  },
});

module.exports = new mongoose.model(name, Schema, name)
module.exports.name = name 