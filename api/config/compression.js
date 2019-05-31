const compression = require('compression')

const filter = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
}

module.exports = compression({
  level: 9,
  filter,
})