const router = require('express').Router()
const { tagerize } = require('../util')
const { Scrap, ctx } = require('../models')

router.get('/@/push', (req, res) => ctx(async () => {

  if (!req.query.q) res.sendStatus(500)

  const scraps = await Scrap.find()

  res.send(JSON.stringify(scraps))

}))

router.post('/@/push', (req, res) => ctx(async () => {

  // get data
  let { query, start, results } = req.body

  // upsert Scrap
  const scrap = await Scrap.findOne({ query }) || { query }
  scrap.start = start + results.length
  await Scrap.findOneAndUpdate({ query }, scrap, { upsert: true })

  // parse unique tags from itens 
  results = results.map(x => ({ ...x, tags: tagerize(`${x.title} ${x.description}`) }))
  console.log(results)
  res.send(req.body)

}))

module.exports = router