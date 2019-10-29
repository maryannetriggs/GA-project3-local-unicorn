const router = require('express').Router()
const cities = require('../controllers/cities')
const travellers = require('../controllers/travellers')
const unicorns = require('../controllers/unicorns')
const experiences = require('../controllers/experiences')
const admin = require('../controllers/admin')

const secureRoute = require('../lib/secureRoute')
const secureRouteUnicorn = require('../lib/secureRouteUnicorn')
const secureRouteAdmin = require('../lib/secureRouteAdmin')



// **********************************   REGISTER ROUTERS   **********************************
router.route('/registerunicorn')
  .post(unicorns.registerUnicorn)

router.route('/registertraveller')
  .post(travellers.register)



// **********************************   LOGIN ROUTERS   **********************************
router.route('/loginunicorn')
  .post(unicorns.loginUnicorn)

router.route('/logintraveller')
  .post(travellers.login)

router.route('/loginadmin')
  .post(admin.loginAdmin)


  
// **********************************   PROFILE ROUTERS   **********************************
router.route('/unicorn')  
  .get(secureRouteUnicorn, unicorns.unicornProfile)
  .put(secureRouteUnicorn, unicorns.updateUnicornProfile)
  .delete(secureRouteUnicorn, unicorns.deleteUnicornProfile)

router.route('/traveller')
  .get(secureRoute, travellers.travellerProfile)
  .put(secureRoute, travellers.updateTravellerProfile)
  .delete(secureRoute, travellers.deleteTravellerProfile)




// **********************************   CITY ROUTERS   **********************************
router.route('/cities/:id')
  .get(cities.show)

router.route('/cities')
  .get(cities.index)



// **********************************   HIDDEN ROUTES   **********************************
router.route('/travellers')
  .get(secureRouteAdmin, travellers.index)



// **********************************   UNICORN ROUTERS   **********************************
router.route('/unicorns/:id')
  .get(unicorns.show)

router.route('/unicorns')
  .get(unicorns.index)



// **********************************   EXPERIENCE ROUTERS   **********************************
router.route('/experiences/:id')
  .get(experiences.show)
  .put(secureRouteUnicorn, experiences.update)
  .delete(secureRouteUnicorn, experiences.remove)

router.route('/experiences')
  .get(experiences.index)
  .post(secureRouteUnicorn, experiences.create)



// **********************************   REVIEW ROUTERS   *************************************
router.route('/experiences/:id/reviews/:reviewId')
  .get(experiences.reviewShow)
  .put(secureRoute, experiences.reviewUpdate)
  .delete(secureRoute, experiences.reviewDelete)


router.route('/experiences/:id/reviews')
  .post(secureRoute, experiences.reviewCreate)



module.exports = router