const cors = require('cors')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

const bodyParser = require('./bodyParser')
const compression = require('./compression')

module.exports = app => {
  app.use(cors())
  dotenv.config()
  app.use(helmet())
  app.use(morgan('tiny'))

  bodyParser(app)
  app.use(compression)
}