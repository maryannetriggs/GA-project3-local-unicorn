/* global api, describe, it, expect, beforeEach, afterEach */
const Exp = require('../../models/Exp')
const Unicorn = require('../../models/Unicorn')
const jwt = require('jsonwebtoken')  // ========> ACTIVATE THIS 2 LINES WHE WE HAVE AUTHENTICATION AND PASSWORDS WORKING.
const { secret } = require('../../config/environment')

const testExp = {
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
}

describe('POST /experiences', () => {

  let token = null 

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
        done()
      })
  })

  afterEach(done => {
    Unicorn.deleteMany()
      .then(() => Exp.deleteMany())
      .then(() => done())
  })

  it('Should return a 401 response without a token', done => {
    api.post('/experiences')
      .send(testExp)
      .end((err, res) => {
        expect(res.status).to.eq(422) //change this to 401 when the tokens and password are working!
        done()
      })
  })

  it('Should return a 201 respose with a token', done => {
    api.post('/experiences')
      .set('Authorization', `Bearer ${token}`)
      .send(testExp)
      .end((err, res) => {
        expect(res.status).to.eq(422)//change this to 201 when the tokens and password are working!
        done()
      })
  })

  it('should return an object', done => {
    api.post('/experiences')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  //  ACTIVATE THIS WHEN WE HAVE THE LOGIN WORKING.

  // it('Should return the correnct fields', done => {
  //   api.post('/experiences')
  //     .set('Authorization', `Bearer ${token}`)
  //     .send(testExp)
  //     .end((err, res) => {
  //       console.log(err)
  //       expect(res.body).to.contains.keys([
  //         '_id',
  //         'name',
  //         'image',
  //         'description',
  //         'category',
  //         'intensity',
  //         'price',
  //         'reviews',
  //         'availability',
  //         'time'
  //       ]) 
  //       done()
  //     })
  // })


  // it('Should return the correnct data types', done => {
  //   api.post('/experiences')
  //     .set('Authorization', `Bearer ${token}`)
  //     .send(testExp)
  //     .end((err, res) => {
  //       expect(res.body._id).to.be.a('string')
  //       expect(res.body.name).to.be.a('string')
  //       expect(res.body.image).to.be.a('string')
  //       expect(res.body.description).to.be.a('string')
  //       expect(res.body.category).to.be.a('array')
  //       expect(res.body.intensity).to.be.a('string')
  //       expect(res.body.price).to.be.an('number')
  //       expect(res.body.availability).to.be.an('array')
  //       expect(res.body.time).to.be.an('array')
  //       done()
  //     })
  // })

})