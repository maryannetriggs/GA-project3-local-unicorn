const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const City = require('../models/City')
const Traveller = require('../models/Traveller')
const Unicorn = require('../models/Unicorn')
const Exp = require('../models/Exp')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return City.create([
          {
            name: 'London',
            image: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
            description: 'I am London',
            country: 'United Kingdom',
            region: 'Europe'
          }
        ])
      })
      .then(() => {
        return Traveller.create([
          {
            name: 'Anna',
            profilePicture: 'https://vetstreet-brightspot.s3.amazonaws.com/b5/28/52c040a04792a7379f5ed6124d43/cat-drinking-water-thinkstock-160612852-335sm9313.jpg',
            about: 'Crazy cat lady',
            country: 'France',
            experiences: 0,
            email: 'anna@mail',
            password: 'pass'
          }
        ])
      })
      .then(() => {
        return Unicorn.create([
          {
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
            password: 'pass'
          }
        ])
      })
      .then(unicorns => {
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
            unicorn: unicorns[0]
          }
        ])
      })
      .then(experiences => console.log(`${experiences.length} experiences created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)