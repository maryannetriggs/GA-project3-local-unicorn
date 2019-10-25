const router = require('express').Router()
const cities = require('../controllers/cities')
const travellers = require('../controllers/travellers')
const unicorns = require('../controllers/unicorns')
const experiences = require('../controllers/experiences')

// GO THROUGH WHICH OF THE BELOW ROUTES NEED TO BE A SECURE ROUTE ONCE WE HAVE FINISHED TESTING IN INSOMNIA!
const secureRoute = require('../lib/secureRoute')
const secureRouteUnicorn = require('../lib/secureRouteUnicorn')

router.route('/api/cities')
  .get(cities.index)

router.route('/api/cities/:id')
  .get(cities.show)

router.route('/api/register')
  .post(travellers.register)

router.route('/api/login')
  .post(travellers.login)
  
// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/api/travellers')
  .get(travellers.index)

router.route('/api/travellers/:id')
  .get(travellers.profile)
  .put(secureRoute, travellers.updateProfile)
  .delete(secureRoute, travellers.deleteProfile)

router.route('/api/registerunicorn/')
  .post(unicorns.registerUnicorn)

router.route('/api/loginunicorn')
  .post(unicorns.loginUnicorn)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/api/unicorns')
  .get(unicorns.index)

router.route('/api/unicorns/:id')  
  .get(unicorns.profile)
  .put(secureRouteUnicorn, unicorns.updateUnicornProfile)
  .delete(secureRouteUnicorn, unicorns.deleteUnicornProfile)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/api/experiences')
  .get(experiences.index)
  .post(experiences.create)

router.route('/api/experiences/:id')
  .get(experiences.show)
  .put(experiences.update)
  .delete(experiences.remove)

router.route('/api/experiences/:id/reviews')
  .post(experiences.reviewCreate)

router.route('/api/experiences/:id/reviews/:reviewId')
  .put(experiences.reviewUpdate)
  .delete(experiences.reviewDelete)


module.exports = router