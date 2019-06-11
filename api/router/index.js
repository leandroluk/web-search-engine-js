const router = require('express').Router()
const { tagerize } = require('../util')
const { Scrap, Page, ctx } = require('../models')

router.get('/@/push', (req, res) => ctx(async () => {

  const query = req.query.q.split(',').map(word => word.toLowerCase().trim())

  if (!query) res.sendStatus(500)

  const start = req.query.start || 0
  let scrap = await Scrap.find({ query })

  if (!!scrap) {
    const results = await Page
      .find({ tags: { $in: query } })
      .skip(start)
      .limit(10)
      .sort('')
    console.log(results)
    scrap = { ...scrap, results }
  }

  console.log(scrap)

  res.send(JSON.stringify(scrap))

}))

router.post('/@/push', (req, res) => ctx(async () => {

  // get data
  let { query, start, results } = req.body

  // upsert Scrap
  const s = await Scrap.findOne({ query }) || { query }
  s.start = start + results.length
  await Scrap.findOneAndUpdate({ query }, s, { upsert: true })

  // parse unique tags from itens 
  results = results.map(x => ({
    ...x,
    tags: tagerize(`${x.title} ${x.description}`)
  }))

  // upsert pages to db async
  results.forEach(async r => {
    await Page.findOneAndUpdate({ url: r.url }, r, { upsert: true })
  });

  res.send(fromDb)

}))

module.exports = router