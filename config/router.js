const router = require('express').Router()
const cities = require('../controllers/cities')
const travellers = require('../controllers/travellers')
const unicorns = require('../controllers/unicorns')
const experiences = require('../controllers/experiences')

// ADD IN THE SECURE ROUTE LATER (and add to relevant routes below)!
// const secureRoute = require('../lib/secureRoute')

router.route('/cities')
  .get(cities.index)

router.route('/cities/:id')
  .get(cities.show)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/travellers')
  .get(travellers.index)

router.route('/travellers/:id')
  .get(travellers.profile)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/unicorns')
  .get(unicorns.index)

router.route('/unicorns/:id')  
  .get(unicorns.profile)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/experiences')
  .get(experiences.index)
  .post(experiences.create)

router.route('/experiences/:id')
  .get(experiences.show)
  .put(experiences.update)
  .delete(experiences.remove)

router.route('/experiences/:id/reviews')
  .post(experiences.reviewCreate)

router.route('/experiences/:id/reviews/:reviewId')
  .delete(experiences.reviewDelete)


module.exports = router