const router = require('express').Router()
const cities = require('../controllers/cities')
const travellers = require('../controllers/travellers')
const unicorns = require('../controllers/unicorns')
const experiences = require('../controllers/experiences')

// const secureRoute = require('../lib/secureRoute')

router.route('/cities')
  .get.route(cities.index)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/travellers')
  .get.route(travellers.index)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/unicorns')
  .get.route(unicorns.index)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/experiences')
  .get.route(experiences.index)


module.exports = router