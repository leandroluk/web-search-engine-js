const mongoose = require('mongoose');

const pageModel = new mongoose.model('Page', new mongoose.Schema({
  title: { type: String, index: true, },
  link: { type: String, index: true, },
  contents: { type: [mongoose.Schema.Types.ObjectId], ref: CONTENT }
}));

const contentModel = new mongoose.model('Content', new mongoose.Schema({
  word: { type: String, index: true, },
  pages: { type: [mongoose.Schema.Types.ObjectId], ref: PAGE }
}));

module.exports = {
  Page: pageModel,
  Content: contentModel
}