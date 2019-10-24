const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const City = require('../models/City')

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
      .then(cities => console.log(`${cities.length} cities created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)