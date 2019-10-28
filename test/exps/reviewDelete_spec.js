// /* global describe, beforeEach, afterEach, it, expect, api */
// const Exp = require('../../models/Exp')
// const Unicorn = require('../../models/Unicorn')
// const City = require('../../models/City')
// const jwt = require('jsonwebtoken')
// const { secret } = require('../../config/environment')

// const testComment = {
//   text: 'test'
// }

// // const testCityData = [{
// //   name: 'London',
// //   image: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
// //   description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
// //   country: 'United Kingdom',
// //   region: 'Europe'
// // }]
// // City.create({
// //   name: 'London',
// //   image: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
// //   description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
// //   country: 'United Kingdom',
// //   region: 'Europe'
// // })
  
// // const testUserData = [{
// //   name: 'test',
// //   profilePicture: 'test',
// //   about: 'test',
// //   city: city,
// //   country: 'test',
// //   region: 'test',
// //   language: ['test, test, test'],
// //   age: 0,
// //   gender: 'test',
// //   email: 'test@mail',
// //   password: 'test',
// //   passwordConfirmation: 'test'
// // }, {
// //   name: 'testTwo',
// //   profilePicture: 'test',
// //   about: 'test',
// //   city: 'test',
// //   country: 'test',
// //   region: 'test',
// //   language: ['test, test, test'],
// //   age: 0,
// //   gender: 'test',
// //   email: 'testTwo@mail',
// //   password: 'test',
// //   passwordConfirmation: 'test'
// // }]

// describe('DELETE /experiences/:id/reviews:reviewId', () => {

//   let createdUnicorns = null
//   let token = null
//   let incorrectToken = null
//   let experiences = null
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
//           name: 'test',
//           profilePicture: 'test',
//           about: 'test',
//           city: city,
//           country: 'test',
//           region: 'test',
//           language: ['test, test, test'],
//           age: 0,
//           gender: 'test',
//           email: 'test@mail',
//           password: 'test',
//           passwordConfirmation: 'test'
//         }, {
//           name: 'testTwo',
//           profilePicture: 'test',
//           about: 'test',
//           city: city,
//           country: 'test',
//           region: 'test',
//           language: ['test, test, test'],
//           age: 0,
//           gender: 'test',
//           email: 'testTwo@mail',
//           password: 'test',
//           passwordConfirmation: 'test'

//         })
//       })
//       .then(unicorn => {
//         createdUnicorns = unicorn
//         token = jwt.sign({ sub: unicorn[0]._id }, secret, { expiresIn: '6h' })
//         incorrectToken = jwt.sign({ sub: unicorn[1]._id }, secret, { expiresIn: '6h' })
//         return Exp.create({
//           name: 'Supper Club',
//           image: 'https://media.timeout.com/images/103546092/630/472/image.jpg',
//           description: 'Pop-up restaurant in someone\'s home',
//           category: ['Food', 'Drink', 'Social'],
//           intensity: 'Low',
//           price: 30,
//           availability: ['Friday', 'Saturday'],
//           time: 'Evening',
//           unicorn: unicorn[0]
//         })
//       })
//       .then(experiences => {
//         experiences.comments.push({ ...testComment, user: createdUnicorns[0] })
//         return experiences.save()
//       })
//       .then(createdExp => {
//         experiences = createdExp
//         review = createdExp.comments[0]
//         done()
//       })
//   })

//   afterEach(done => {
//     Unicorn.deleteMany()
//       .then(() => City.deleteMany())
//       .then(() => Exp.deleteMany())
//       .then(() => done())
//   })

//   // it('should return a 401 unauthorized response if no token is passed', done => {
//   //   api.delete(`/api/experiences/${experiences._id}/comments/${review._id}`)
//   //     .end((err, res) => {
//   //       expect(res.status).to.eq(401)
//   //       done()
//   //     })
//   // })

//   it('should return a 204 created response if a valid token is passed', done => {
//     api.delete(`/api/experiences/${experiences._id}/comments/${review._id}`)
//       .set('Authorization', `Bearer ${token}`)
//       .end((err, res) => {
//         expect(res.status).to.eq(204)
//         done()
//       })
//   })
  
//   it('should return a 401 unauthorised response if a token different than the user who created the review is passed', done => {
//     api.delete(`/api/experiences/${experiences._id}/comments/${review._id}`)
//       .set('Authorization', `Bearer ${incorrectToken}`)
//       .end((err, res) => {
//         expect(res.status).to.eq(401)
//         done()
//       })
//   })

// })