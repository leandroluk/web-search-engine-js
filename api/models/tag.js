const mongoose = require('mongoose')

const name = 'Tag'

const Schema = new mongoose.Schema({
  word: {
    type: String,
    index: true,
  },
});

module.exports = new mongoose.model(name, Schema, name)