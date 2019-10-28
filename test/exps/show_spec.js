/* global api, describe, it, expect, beforeEach, afterEach */
const Exp = require('../../models/Exp')
const Unicorn = require('../../models/Unicorn')
const City = require('../../models/City')

describe('GET /experiences/:id', () => {

  let experience = null 

  beforeEach(done => {
    City.create({
      name: 'London',
      image: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
      description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
      country: 'United Kingdom',
      region: 'Europe'
    })

      .then(city => {
        return Unicorn.create({
          name: 'Mona',
          profilePicture: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/31/10/lion-face.jpg?w968h681',
          about: 'Foodie',
          city: city,
          country: 'Boston',
          region: 'North America',
          language: ['English, French, Japanese'],
          age: 35,
          gender: 'Female',
          email: 'mona@mail',
          password: 'pass',
          passwordConfirmation: 'pass'
        })
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
      .then(createdExp => {
        experience = createdExp[0]
        done()
      })
  })

  afterEach(done => {
    Unicorn.deleteMany()
      .then(() => City.deleteMany())
      .then(() => Exp.deleteMany())
      .then(() => done())
  })

  it('Should return a 404 not found for an invalid experience id', done => {
    api.get(`/api/experiences${experience._id}`)
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return a 200 response', done => {
    api.get(`/api/experiences/${experience._id}`) // <=== and using that animal we have created and stored in the requests
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an object', done => {
    api.get(`/api/experiences/${experience._id}`) // <=== and using that animal we have created and stored in the requests
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('Should return the correnct fields', done => {
    api.get(`/api/experiences/${experience._id}`)
      .end((err, res) => {
        expect(res.body).to.contain.keys([
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
    api.get(`/api/experiences/${experience._id}`)
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