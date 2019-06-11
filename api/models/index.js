const mongoose = require('mongoose')

module.exports = {
  Page: require('./page'),
  Scrap: require('./scrap'),
  ctx: require('../config/db')
}