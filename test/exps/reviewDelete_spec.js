// /* global describe, beforeEach, afterEach, it, expect, api */
// const Exp = require('../../models/Exp')
// const Unicorn = require('../../models/Unicorn')
// const City = require('../../models/City')
// const jwt = require('jsonwebtoken')
// const { secret } = require('../../config/environment') 

// const testReviews = {
//   text: 'test'
// }

// describe('DELETE /experience/:id/reviews:reviewId', () => {

//   const createdUnicorns = null
//   let token = null
//   let incorrectToken = null
//   let experience = null
//   let review = null


//   beforeEach(done => {
//     City.create({
//       name: 'London',
//       image: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
//       description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
//       country: 'United Kingdom',
//       region: 'Europe'
//     })

//       .then(city => {
//         return Unicorn.create({
//           name: 'Mona',
//           profilePicture: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/10/lion-face.jpg?w968h681',
//           about: 'Foodie',
//           city: city,
//           country: 'Boston',
//           region: 'North America',
//           language: ['English, French, Japanese'],
//           age: 35,
//           gender: 'Female',
//           email: 'mona@mail',
//           password: 'pass',
//           passwordConfirmation: 'pass'
//         })
//           .then(unicorn => {
//             token = jwt.sign({ sub: unicorn[0]._id }, secret, { expiresIn: '6h' })
//             incorrectToken = jwt.sign({ sub: unicorn[1]._id }, secret, { expiresIn: '6h' })
//             return Exp.create({
//               name: 'Supper Club',
//               image: 'https://media.timeout.com/images/103546092/630/472/image.jpg',
//               description: 'Pop-up restaurant in someone\'s home',
//               category: ['Food', 'Drink', 'Social'],
//               intensity: 'Low',
//               price: 30,
//               availability: ['Friday', 'Saturday'],
//               time: 'Evening',
//               unicorn
//             }) 
//           })
//           .then(experience => {
//             experience.reviews.push({ ...testReviews, unicorn: createdUnicorns[0] })
//             return experience.save()
//           })
//           .then(createdExp => {
//             experience = createdExp
//             review = createdExp.reviews[0]
//             done()
//           })
//       })
//   })

//   afterEach(done => {
//     Unicorn.deleteMany()
//       .then(() => City.deleteMany())
//       .then(() => Exp.deleteMany())
//       .then(() => done())
//   })

//   it('should return a 401 unauthorized response if no token is passed', done => {
//     api.delete(`/api/experiences/${experience._id}/reviews/${review._id}`)
//       .end((err, res) => {
//         expect(res.status).to.eq(401)
//         done()
//       })
//   })

//   it('should return a 204 created response if a valid token is passed', done => {
//     api.delete(`/api/experiences/${experience._id}/reviews/${review._id}`)
//       .set('Authorization', `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res.status).to.eq(204)
//         done()
//       })
//   })
  
//   it('should return a 401 unauthorised response if a token different than the user who created the review is passed', done => {
//     api.delete(`/api/experiences/${experience._id}/reviews/${review._id}`)
//       .set('Authorization', `Bearer ${incorrectToken}`)
//       .end((err, res) => {
//         expect(res.status).to.eq(401)
//         done()
//       })
//   })
// })