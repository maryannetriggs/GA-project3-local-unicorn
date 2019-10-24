const router = require('express').Router()
const cities = require('')

const secureRoute = require('../lib/secureRoute')

router.route('/cities')
  .get(cities.index)

module.exports = router