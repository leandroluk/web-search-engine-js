const router = require('express').Router()
const models = require('../models')

router.post('/@', (req, res) => {
  // get sended list
  // add content url
  res.send(req.body)
})

module.exports = router