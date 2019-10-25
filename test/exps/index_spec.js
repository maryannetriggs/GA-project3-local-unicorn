/* global describe, beforeEach, afterEach, it, expect, api */
const Exp = require('../../models/Exp')
const Unicorn = require('../../models/Unicorn')

describe('GET /experiences', () => {

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
        return Exp.create([
          {
            name: 'Supper Club',
            image: 'https://media.timeout.com/images/103546092/630/472/image.jpg',
            description: 'Pop-up restaurant in someone\'s home',
            category: ['Food', 'Drink', 'Social'],
            intensity: 'Low',
            price: 30,
            availability: ['Friday', 'Saturday'],
            time: 'Evening',
            unicorn: unicorn
          }
        ])
      })
      .then(() => done())
  })

  afterEach(done => {
    Unicorn.deleteMany()
      .then(() => Exp.deleteMany())
      .then(() => done())
  })

  it('Should return 200 response', done => {
    api.get('/experiences')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('Should return an array', done => {
    api.get('/experiences')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('Should return an arrey of objects', done => {
    api.get('/experiences')
      .end((err, res) => {
        res.body.forEach(exp => {
          expect(exp).to.be.an('object')
        })
        done()
      }) 
  })

  it('Should return the correnct fields', done => {
    api.get('/experiences')
      .end((err, res) => {
        res.body.forEach(exp => {
          expect(exp).to.contain.keys([
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
        })
        done()
      })
  })

  it('Should return the correnct data types', done => {
    api.get('/experiences')
      .end((err, res) => {
        res.body.forEach(exp => {
          expect(exp._id).to.be.a('string')
          expect(exp.name).to.be.a('string')
          expect(exp.image).to.be.a('string')
          expect(exp.description).to.be.a('string')
          expect(exp.category).to.be.a('array')
          expect(exp.intensity).to.be.a('string')
          expect(exp.price).to.be.an('number')
          expect(exp.availability).to.be.an('array')
          expect(exp.time).to.be.an('array')
        })
        done()
      })
  })

})