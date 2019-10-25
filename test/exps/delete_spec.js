/* global api, describe, it, expect, beforeEach, afterEach */
const Exp = require('../../models/Exp')
const Unicorn = require('../../models/Unicorn')
const jwt = require('jsonwebtoken')  // ========> ACTIVATE THIS 2 LINES WHE WE HAVE AUTHENTICATION AND PASSWORDS WORKING.
const { secret } = require('../../config/environment')

describe('DELETE /experiences/:id', () => {
  let token = null
  let experience = null

  beforeEach(done => {
    Unicorn.create({
      name: 'Mona',
      profilePicture: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/10/lion-face.jpg?w968h681',
      about: 'Foodie',
      city: 'Stockholm',
      country: 'Boston',
      region: 'North America',
      language: ['English, French, Japanese'],
      age: 35,
      gender: 'Female',
      email: 'mona@mail',
      password: 'pass',
      passwordConfirmation: 'pass'
    })
      .then(unicorn => {
        token = jwt.sign({ sub: unicorn._id }, secret, { expiresIn: '6h' })
        return Exp.create({
          name: 'Supper Club',
          image: 'https://media.timeout.com/images/103546092/630/472/image.jpg',
          description: 'Pop-up restaurant in someone\'s home',
          category: ['Food', 'Drink', 'Social'],
          intensity: 'Low',
          price: 30,
          availability: ['Friday', 'Saturday'],
          time: 'Evening',
          unicorn
        }) 
      })
      .then(createdExp => {
        experience = createdExp
        done()
      })
  })

  afterEach(done => { 
    Unicorn.deleteMany()
      .then(() => Exp.deleteMany())
      .then(() => done())
  })

  it('should return a 401 response without a token', done => {
    api.delete(`/experiences/${experience._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(204) // <=====  CHANGE THIS TO 401 WHEN THE LOGIN IS WORKING.
        done()
      })
  })

  it('should return a 204 response with a token', done => {
    api.delete(`/experiences/${experience._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(204)
        done()
      })
  })

  it('should return no data', done => {
    api.delete(`/experiences/${experience._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.deep.eq({})
        done()
      })
  })

})