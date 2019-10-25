const router = require('express').Router()
const cities = require('../controllers/cities')
const travellers = require('../controllers/travellers')
const unicorns = require('../controllers/unicorns')
const experiences = require('../controllers/experiences')

// GO THROUGH WHICH OF THE BELOW ROUTES NEED TO BE A SECURE ROUTE ONCE WE HAVE FINISHED TESTING IN INSOMNIA!
const secureRoute = require('../lib/secureRoute')
const secureRouteUnicorn = require('../lib/secureRouteUnicorn')

router.route('/cities')
  .get(cities.index)

router.route('/cities/:id')
  .get(cities.show)

router.route('/register')
  .post(travellers.register)

router.route('/login')
  .post(travellers.login)
  
// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/travellers')
  .get(travellers.index)

router.route('/travellers/:id')
  .get(travellers.profile)
  .put(secureRoute, travellers.updateProfile)
  .delete(secureRoute, travellers.deleteProfile)

router.route('/registerunicorn/')
  .post(unicorns.registerUnicorn)

router.route('/loginunicorn')
  .post(unicorns.loginUnicorn)

// we should make sure people cannot get to this index page by typing in that url later - block it/remove it?
router.route('/unicorns')
  .get(unicorns.index)

router.route('/unicorns/:id')  
  .get(unicorns.profile)
  .put(secureRouteUnicorn, unicorns.updateUnicornProfile)
  .delete(secureRouteUnicorn, unicorns.deleteUnicornProfile)

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
  .put(experiences.reviewUpdate)
  .delete(experiences.reviewDelete)


module.exports = router