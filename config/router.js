const router = require('express').Router()
const cities = require('../controllers/cities')
const travellers = require('../controllers/travellers')
const unicorns = require('../controllers/unicorns')
const experiences = require('../controllers/experiences')

const secureRoute = require('../lib/secureRoute')
const secureRouteUnicorn = require('../lib/secureRouteUnicorn')



// **********************************   CITY ROUTERS   **********************************
router.route('/api/cities')
  .get(cities.index)

router.route('/api/cities/:id')
  .get(cities.show)



// **********************************   TRAVELLER ROUTERS   **********************************
router.route('/api/registertraveller')
  .post(travellers.register)

router.route('/api/logintraveller')
  .post(travellers.login)
  
// WE WANT TO BLOCK THIS PAGE SO THAT NO-ONE CAN SEE THE PAGE WITH ALL TRAVELLERS - go back over code to see how jack did this before with unauthorised pages.
router.route('/api/travellers')
  .get(travellers.index)

router.route('/api/travellers/:id')
  .get(secureRoute, travellers.profile)
  .put(secureRoute, travellers.updateProfile)
  .delete(secureRoute, travellers.deleteProfile)



// **********************************   UNICORN ROUTERS   **********************************
router.route('/api/registerunicorn/')
  .post(unicorns.registerUnicorn)

router.route('/api/loginunicorn')
  .post(unicorns.loginUnicorn)

// DO WE WANT PEOPLE TO BE ABLE TO GO TO THIS FIRST PAGE WHERE THEY CAN SEE ALL THE UNICORNS? Or should be block it/make it secure to unicorns only?
router.route('/api/unicorns')
  .get(unicorns.index)

router.route('/api/unicorns/:id')  
  .get(unicorns.profile)
  .put(secureRouteUnicorn, unicorns.updateUnicornProfile)
  .delete(secureRouteUnicorn, unicorns.deleteUnicornProfile)



// **********************************   EXPERIENCE ROUTERS   **********************************

// DO WE WANT PEOPLE TO BE ABLE TO GO TO THIS FIRST PAGE WHERE THEY CAN SEE ALL THE EXPERIENCES? Or should be block it/make it secure to unicorns only?
router.route('/api/experiences')
  .get(experiences.index)
  .post(secureRouteUnicorn, experiences.create)

router.route('/api/experiences/:id')
  .get(experiences.show)

  // PROBLEMS IN INSOMNIA:
  .put(secureRouteUnicorn, experiences.update)
  .delete(secureRouteUnicorn, experiences.remove)



// **********************************   REVIEW ROUTERS   **********************************
router.route('/api/experiences/:id/reviews')
  .post(secureRoute, experiences.reviewCreate)

router.route('/api/experiences/:id/reviews/:reviewId')
  .get(experiences.reviewShow)
  .put(secureRoute, experiences.reviewUpdate)
  .delete(secureRoute, experiences.reviewDelete)





module.exports = router