const router = require('express').Router()
const cities = require('../controllers/cities')
const travellers = require('../controllers/travellers')
const unicorns = require('../controllers/unicorns')
const experiences = require('../controllers/experiences')
const admin = require('../controllers/admin')

const secureRoute = require('../lib/secureRoute')
const secureRouteUnicorn = require('../lib/secureRouteUnicorn')
const secureRouteAdmin = require('../lib/secureRouteAdmin')



// **********************************   ADMIN ROUTERS   **********************************
router.route('/loginadmin')
  .post(admin.loginAdmin)



// **********************************   CITY ROUTERS   **********************************
router.route('/cities')
  .get(cities.index)

router.route('/cities/:id')
  .get(cities.show)



// **********************************   TRAVELLER ROUTERS   **********************************
router.route('/registertraveller')
  .post(travellers.register)

router.route('/logintraveller')
  .post(travellers.login)
  
router.route('/travellers')
  .get(secureRouteAdmin, travellers.index)

router.route('/travellers/:id')
  .get(secureRoute, travellers.profile)
  .put(secureRoute, travellers.updateProfile)
  .delete(secureRoute, travellers.deleteProfile)



// **********************************   UNICORN ROUTERS   **********************************
router.route('/registerunicorn/')
  .post(unicorns.registerUnicorn)

router.route('/loginunicorn')
  .post(unicorns.loginUnicorn)

// ?? DO WE WANT PEOPLE TO BE ABLE TO GO TO THIS FIRST PAGE WHERE THEY CAN SEE ALL THE UNICORNS? Or should be block it/make it secure to unicorns only?
router.route('/unicorns')
  .get(unicorns.index)

router.route('/unicorns/:id')  
  .get(unicorns.profile)
  .put(secureRouteUnicorn, unicorns.updateUnicornProfile)
  .delete(secureRouteUnicorn, unicorns.deleteUnicornProfile)



// **********************************   EXPERIENCE ROUTERS   **********************************

// ?? DO WE WANT PEOPLE TO BE ABLE TO GO TO THIS FIRST PAGE WHERE THEY CAN SEE ALL THE EXPERIENCES? Or should be block it/make it secure to unicorns only?
router.route('/experiences')
  .get(experiences.index)
  .post(secureRouteUnicorn, experiences.create)

router.route('/experiences/:id')
  .get(experiences.show)
  .put(secureRouteUnicorn, experiences.update)
  .delete(secureRouteUnicorn, experiences.remove)



// **********************************   REVIEW ROUTERS   **********************************
router.route('/experiences/:id/reviews')
  .post(secureRoute, experiences.reviewCreate)

router.route('/experiences/:id/reviews/:reviewId')
  .get(experiences.reviewShow)
  .put(secureRoute, experiences.reviewUpdate)
  .delete(secureRoute, experiences.reviewDelete)





module.exports = router