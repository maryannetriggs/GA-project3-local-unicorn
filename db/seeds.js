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
            password: 'pass',
            passwordConfirmation: 'pass'
          }
        ])
      })
      .then(() => {
        return Unicorn.create([
          {
            name: 'Mona Smith',
            profilePicture: 'https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            about: 'Bubbly and social, I love showing off Tokyo to visitors.',
            city: 'Tokyo',
            country: 'Japan',
            region: 'Asia',
            language: ['English', 'French', 'Japanese'],
            age: 35,
            gender: 'Female',
            email: 'mona@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Georgios Andino',
            profilePicture: 'https://images.unsplash.com/photo-1556135063-eba17c48d523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'A Greek currently living and working in London. Travel is my passion, I want to share some of my favourite discoveries with you.',
            city: 'London',
            country: 'United Kingdom',
            region: 'Europe',
            language: ['English', 'Greek'],
            age: 30,
            gender: 'Male',
            email: 'georgios@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Emma Brown',
            profilePicture: 'https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            about: 'I believe the best things in the world come from living outside your comfort zone. Let me introduce you to the wonders of New York.',
            city: 'New York',
            country: 'United States',
            region: 'North America',
            language: ['English', 'Italian'],
            age: 28,
            gender: 'Female',
            email: 'emma@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Maria Orta',
            profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'A day in the life of me - eat avocado toast, post instagram photos and drink strong coffee.',
            city: 'Madrid',
            country: 'Spain',
            region: 'Europe',
            language: ['English', 'Portuguese', 'Spanish'],
            age: 31,
            gender: 'Female',
            email: 'maria@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Anthony Perez',
            profilePicture: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Currently saying yes to new adventures, come along with me!',
            city: 'Mexico City',
            country: 'Mexico',
            region: 'Central America',
            language: ['English', 'Spanish', 'Maya'],
            age: 38,
            gender: 'Male',
            email: 'anthony@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Mary-Anne Jones',
            profilePicture: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'Traveller ✈️, book lover 📖 and obsessed with tacos 🌮.',
            city: 'Wellington',
            country: 'New Zealans',
            region: 'Oceania',
            language: ['English'],
            age: 32,
            gender: 'Female',
            email: 'maryanne@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Felicia Ulvefeldt',
            profilePicture: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'Let me show you around the best city in the world. I\'ll take you off the tourist route and show you the real Stockholm.',
            city: 'Stockhom',
            country: 'Sweden',
            region: 'Europe',
            language: ['English', 'Swedish'],
            age: 21,
            gender: 'Female',
            email: 'felicia@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Gerardo Alfaro',
            profilePicture: 'https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'The best stories are found in the pages of your passport, providing a local\'s view of La Paz since 2016.',
            city: 'La Paz',
            country: 'Bolivia',
            region: 'South America',
            language: ['English', 'Spanish'],
            age: 21,
            gender: 'Male',
            email: 'gerardo@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Celeste Bisset',
            profilePicture: 'https://images.unsplash.com/photo-1567520660079-4773823badac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'I enjoy making connections and making friends from across the world, lets make memories together.',
            city: 'Paris',
            country: 'France',
            region: 'Europe',
            language: ['French'],
            age: 45,
            gender: 'Female',
            email: 'celeste@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Sundaresh Loong',
            profilePicture: 'https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
            about: 'Contact me for a one-of-its kind tour around the beautiful city-state of Singapore.',
            city: 'Singapore',
            country: 'Singapore',
            region: 'Asia',
            language: ['English', 'Tamil', 'Mandarin'],
            age: 23,
            gender: 'Male',
            email: 'sundaresh@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Abu Belcaid',
            profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Marrakech is always a good idea - let me show you the hidden gems',
            city: 'Marrakech',
            country: 'Morocco',
            region: 'Caribbean',
            language: ['English', 'Arabic'],
            age: 37,
            gender: 'Male',
            email: 'abu@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Katina Petrova',
            profilePicture: 'https://images.unsplash.com/photo-1568622262086-042cc612f363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Just a wandering soul, in need of an exciting new adventure.',
            city: 'Moscow',
            country: 'Russia',
            region: 'Asia',
            language: ['English', 'Russian', 'German'],
            age: 26,
            gender: 'Female',
            email: 'katina@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Yin Qiang',
            profilePicture: 'https://images.unsplash.com/photo-1525875975471-999f65706a10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'It\'s said that a journey is best measured in friends rather than miles. An experience booked with me is guaranteed to include both.',
            city: 'Shanghai',
            country: 'China',
            region: 'Asia',
            language: ['English', 'Mandarin'],
            age: 30,
            gender: 'Female',
            email: 'yin@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Odila Laurent',
            profilePicture: 'https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'It\'s always worth taking the scenic route. I\'ll be your guide through the beauties of my favourite city (and I\'ve seen a few)!',
            city: 'Paris',
            country: 'France',
            region: 'Europe',
            language: ['English', 'French', 'Spanish', 'Dutch', 'Urdu', 'Arabic'],
            age: 24,
            gender: 'Female',
            email: 'odila@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Majid Iravani',
            profilePicture: 'https://images.unsplash.com/photo-1487529236533-f2b78c0c9344?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'Welcome to Iran, home of beautiful poetry, luxurious rugs and lush gardens.',
            city: 'Tehran',
            country: 'Iran',
            region: 'Asia',
            language: ['English', 'Persian', 'Arabic'],
            age: 62,
            gender: 'Male',
            email: 'majid@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Mark Saunders',
            profilePicture: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'If you like busy cities, football and staying up late, I\'ve got the perfect day planned for you!',
            city: 'London',
            country: 'United Kingdom',
            region: 'Europe',
            language: ['English', 'French'],
            age: 32,
            gender: 'Male',
            email: 'mark@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Kelly Stone',
            profilePicture: 'https://images.unsplash.com/photo-1516239482977-b550ba7253f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'I already know we\'re going to have the most amazing time. Allow me to show you the most fun you can have in New York without getting arrested!',
            city: 'New York',
            country: 'United States',
            region: 'North America',
            language: ['English'],
            age: 22,
            gender: 'Female',
            email: 'kelly@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Louise Williams',
            profilePicture: 'https://images.unsplash.com/photo-1531528329400-a5b98b2c3b83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'Be my guest, be my guest, put my service to the test - you\'re singing along aren\'t you?',
            city: 'London',
            country: 'United Kingdom',
            region: 'Europe',
            language: ['English', 'German'],
            age: 37,
            gender: 'Female',
            email: 'louise@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Angel Velez',
            profilePicture: 'https://images.unsplash.com/photo-1546672657-366775449156?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'People lover, dedicated to showing people the magic of Madrid.',
            city: 'Madrid',
            country: 'Spain',
            region: 'Europe',
            language: ['English', 'Spanish'],
            age: 31,
            gender: 'Male',
            email: 'angel@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Aito Tanaka',
            profilePicture: 'Just book a tour with me already',
            about: 'https://images.unsplash.com/photo-1552358155-515e264cb8b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            city: 'Tokyo',
            country: 'Japan',
            region: 'Asia',
            language: ['English', 'Japanese', 'Mandarin'],
            age: 29,
            gender: 'Male',
            email: 'aito@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
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