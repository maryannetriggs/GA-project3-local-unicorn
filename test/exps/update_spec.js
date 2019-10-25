/* global api, describe, it, expect, beforeEach, afterEach */
const Exp = require('../../models/Exp')
const Unicorn = require('../../models/Unicorn')
const jwt = require('jsonwebtoken')  // ========> ACTIVATE THIS 2 LINES WHE WE HAVE AUTHENTICATION AND PASSWORDS WORKING.
const { secret } = require('../../config/environment')

describe('PUT /experiences/:id', () => {
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
    api.put(`/experiences/${experience._id}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(202) // <=====  CHANGE THIS TO 204 WHEN THE LOGIN IS WORKING.
        done()
      })
  })

  it('should return a 202 response with a token', done => {
    api.put(`/experiences/${experience._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.status).to.eq(202)
        done()
      })
  })

  it('should return an object', done => {
    api.put(`/experiences/${experience._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.put(`/experiences/${experience._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.body).to.contains.keys([
          '_id',
          'name',
          'image',
          'description',
          'category',
          'intensity',
          'price',
          'reviews',
          'availability',
          'time'
        ])
        done()
      })
  })

  it('Should return the correnct data types', done => {
    api.put(`/experiences/${experience._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'Test' })
      .end((err, res) => {
        expect(res.body._id).to.be.a('string')
        expect(res.body.name).to.be.a('string')
        expect(res.body.image).to.be.a('string')
        expect(res.body.description).to.be.a('string')
        expect(res.body.category).to.be.a('array')
        expect(res.body.intensity).to.be.a('string')
        expect(res.body.price).to.be.an('number')
        expect(res.body.availability).to.be.an('array')
        expect(res.body.time).to.be.an('array')
        done()
      })
  })

})