const router = require('express').Router()
const { tagerize } = require('../util')
const { Scrap, Page, ctx } = require('../models')

router.get('/@/push', (req, res) => ctx(async () => {

  const query = req.query.q.split(',').map(word => word.toLowerCase().trim())

  if (!query) res.sendStatus(500)

  const scrap = {
    ...(await Scrap.find({ query }) || {}),
    results: await Page
      .find({ tags: { $in: query } })
      .skip(req.query.start || 0)
      .limit(10)
      .sort('')
  }

  res.send(scrap)

}))

router.post('/@/push', (req, res) => ctx(async () => {

  // get data
  let { query, start, results } = req.body
  // upsert Scrap
  const scrap = await Scrap.findOne({ query }) || { query }
  scrap.start = parseInt(start) + results.length

  await Scrap.findOneAndUpdate({ query }, scrap, { upsert: true })

  // parse unique tags from itens 
  results = results.map(result => ({
    ...result,
    tags: tagerize(`${result.title} ${result.description}`)
  }))

  // upsert pages to db async
  results.forEach(async result =>
    await Page.findOneAndUpdate({ url: result.url }, result, { upsert: true })
  );

  res.send(scrap)

}))

module.exports = router