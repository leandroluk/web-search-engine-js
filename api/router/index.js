const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.Promise = require('bluebird')

const router = require('express').Router()
const { Scrap } = require('../models')

router.get('/@/push', async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

  if (!req.query.q) res.sendStatus(500)
  console.log(Scrap)
  res.send(JSON.stringify(Scrap))
})

router.post('/@/push', (req, res) => {
  // get sended list
  // add content url
  console.log(req.body)
  res.send(req.body)
})

module.exports = router