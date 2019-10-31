const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const City = require('../models/City')
const Traveller = require('../models/Traveller')
const Unicorn = require('../models/Unicorn')
const Exp = require('../models/Exp')
const Admin = require('../models/Admin')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return Admin.create([
          {
            name: 'Admin',
            email: 'admin@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
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
          },
          {
            name: 'John',
            profilePicture: 'https://images.unsplash.com/photo-1553907725-c3d2e2ccc00e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Motorbike lover, if it were up to me I would travel the world on my bike',
            country: 'Austria',
            experiences: 2,
            email: 'john@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Petra',
            profilePicture: 'https://live.staticflickr.com/5028/5788609294_a18777f8cc_b.jpg',
            about: 'Looking for a new adventure.',
            country: 'Greece',
            experiences: 4,
            email: 'petra@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Alba',
            profilePicture: 'https://www.missfreedomusa.com/wp-content/uploads/2018/02/Cassandra-Dobbins.jpg',
            about: 'Citizen of the world',
            country: 'United States',
            experiences: 9,
            email: 'alba@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Marco',
            profilePicture: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Pizza, Pizza, Pizza',
            country: 'Italy',
            experiences: 5,
            email: 'marco@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Antonio',
            profilePicture: 'https://i.pinimg.com/originals/74/0e/7a/740e7a48d16bfa9d73002653464f96e2.jpg',
            about: 'Crazy traveller and animal lover',
            country: 'Spain',
            experiences: 2,
            email: 'antonio@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Ciara',
            profilePicture: 'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Passionate for travel and meeting new people',
            country: 'Ireland',
            experiences: 3,
            email: 'ciara@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Lukas',
            profilePicture: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            about: 'A troubled man from Europe who can only walk by day, I am built to have fun 🤩.',
            country: 'England',
            experiences: 4,
            email: 'lukas@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Paula',
            profilePicture: 'https://images.unsplash.com/photo-1554140381-125b895a9f08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            about: 'My purpose in life is to pursue happiness and good food.',
            country: 'Argentina',
            experiences: 1,
            email: 'paula@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Lara',
            profilePicture: 'https://i.pinimg.com/originals/af/ca/19/afca19ae4411bf2ad8793e9bda7acd2a.jpg',
            about: 'A generous radiologist who finds it hard to say no to new adventure',
            country: 'Germany',
            experiences: 7,
            email: 'lara@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          }
        ])
      })
      .then(() => {
        return City.create([
          {
            name: 'London',
            image: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
            description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
            country: 'United Kingdom',
            region: 'Europe'
          },
          {
            name: 'New York',
            image: 'https://i.ytimg.com/vi/CsxkGDhf2Rw/maxresdefault.jpg',
            description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.',
            country: 'United States',
            region: 'North America'
          },
          {
            name: 'Paris',
            image: 'https://europeanbusinessmagazine.com/wp-content/uploads/2017/07/paris.jpg',
            description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe and fashion culture.',
            country: 'France',
            region: 'Europe'
          },
          {
            name: 'Madrid',
            image: 'https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555940004/production/city/hero_image_16_1555940004.jpg',
            description: 'Madrid, Spain\'s central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. The heart of old Hapsburg Madrid is the portico-lined Plaza Mayor, and nearby is the baroque Royal Palace and Armory, displaying historic weaponry.',
            country: 'Spain',
            region: 'Europe'
          },
          {
            name: 'Tokyo',
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            description: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The city\'s many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).',
            country: 'Japan',
            region: 'Asia'
          },
          {
            name: 'Tehran',
            image: 'https://lonelyplanetimages.imgix.net/mastheads/115012233.jpg?sharp=10&vib=20&w=1200',
            description: 'Tehran is the capital of Iran, in the north of the country. Its central Golestan Palace complex, with its ornate rooms and marble throne, was the seat of power of the Qajar dynasty. The Milad Tower offers panoramic views over the city.',
            country: 'Iran',
            region: 'Asia'
          },
          {
            name: 'Shanghai',
            image: 'https://pix10.agoda.net/geo/city/3987/1_3987_02.jpg?s=1920x822',
            description: 'Shanghai, on China’s central coast, is the country\'s biggest city and a global financial hub. Across the Huangpu River rises the Pudong district’s futuristic skyline, including 632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres.',
            country: 'China',
            region: 'Asia'
          },
          {
            name: 'Moscow',
            image: 'https://cdn.getyourguide.com/img/tour_img-1204869-148.jpg',
            description: 'Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. It\'s home to Lenin’s Mausoleum, the State Historical Museum\'s comprehensive collection and St. Basil’s Cathedral, known for its colorful, onion-shaped domes.',
            country: 'Russia',
            region: 'Europe'
          },
          {
            name: 'Mexico City',
            image: 'https://www.fodors.com/wp-content/uploads/2019/03/FridaandDiegoMexicoCity__HERO_shutterstock_1005708952.jpg',
            description: 'Mexico City is the densely populated, high-altitude capital of Mexico. It\'s known for its Templo Mayor (a 13th-century Aztec temple), the baroque Catedral Metropolitana de México of the Spanish conquistadors and the Palacio Nacional, which houses historic murals by Diego Rivera.',
            country: 'Mexico',
            region: 'Central America'
          },
          {
            name: 'Marrakesh',
            image: 'https://cdn.matthewwilliamson.com/wp-content/uploads/2015/10/Marrakech-1140x726.jpg',
            description: 'Marrakesh, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. A symbol of the city, and visible for miles, is the Moorish minaret of 12th-century Koutoubia Mosque.',
            country: 'Morocco',
            region: 'Africa'
          },
          {
            name: 'Stockholm',
            image: 'https://www.routesnorth.com/wp-content/uploads/2018/02/stockholm-pass-worth-it.jpg',
            description: 'Stockholm, the capital of Sweden, encompasses 14 islands and more than 50 bridges on an extensive Baltic Sea archipelago. Ferries and sightseeing boats shuttle passengers between the islands.',
            country: 'Sweden',
            region: 'Europe'
          },
          {
            name: 'Singapore',
            image: 'https://handluggageonly.co.uk/wp-content/uploads/2015/07/Hand-Luggage-Only-17-1.jpg',
            description: 'Even though Singapore is one of the smallest countries in the world, its capital with the same name is known as a melting pot of cultures. It is a great place for tourists as it offers fantastic food, unparalleled safety and clenliness, and has a facinating history.',
            country: 'Singapore',
            region: 'Asia'
          },
          {
            name: 'Wellington',
            image: 'https://elrancho.co.nz/site/elrancho/images/Wellington%20harbour%20resized.jpg',
            description: 'Wellington, the capital of New Zealand, sits near the North Island’s southernmost point on the Cook Strait. A compact city, it encompasses a waterfront promenade, sandy beaches, a working harbour and colourful timber houses on surrounding hills.',
            country: 'New Zeland',
            region: 'Oceania'
          },
          {
            name: 'La Paz',
            image: 'https://www.ecuavisa.com/sites/default/files/fotos/2014/12/07/la_paz.jpg',
            description: 'La Paz, in Bolivia, is the highest administrative capital in the world, resting on the Andes’ Altiplano plateau at more than 3,500m above sea level. Illimani as its backdrop. The city\'s dramatic setting can be taken in during rides on Mi Teleférico, the aerial cable car system.',
            country: 'Bolivia',
            region: 'South America'
          }
        ])
      })
      .then(cities => {
        return Unicorn.create([
          {
            name: 'Mona Smith',
            profilePicture: 'https://images.unsplash.com/photo-1554780336-390462301acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            about: 'Bubbly and social, I love showing off Tokyo to visitors.',
            city: cities[4],
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
            about: 'Greek currently living and working in London. Travel is my passion, I want to share some of my favourite discoveries with you.',
            city: cities[0],
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
            city: cities[1],
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
            city: cities[3],
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
            city: cities[8],
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
            city: cities[12],
            country: 'New Zealand',
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
            city: cities[10],
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
            city: cities[13],
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
            city: cities[2],
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
            about: 'Contact me for a one-of-a kind tour around the beautiful city-state of Singapore.',
            city: cities[11],
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
            city: cities[9],
            country: 'Morocco',
            region: 'Africa',
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
            about: 'A wandering soul in need of an exciting new adventure.',
            city: cities[7],
            country: 'Russia',
            region: 'Europe',
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
            city: cities[6],
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
            city: cities[2],
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
            city: cities[5],
            country: 'Iran',
            region: 'Asia',
            language: ['English', 'Farci', 'Arabic'],
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
            city: cities[0],
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
            city: cities[1],
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
            city: cities[0],
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
            city: cities[3],
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
            profilePicture: 'https://images.unsplash.com/photo-1552358155-515e264cb8b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Just book a tour with me already',
            city: cities[4],
            country: 'Japan',
            region: 'Asia',
            language: ['English', 'Japanese', 'Mandarin'],
            age: 29,
            gender: 'Male',
            email: 'aito@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Annika Ivanov',
            profilePicture: 'https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
            about: 'Living one day at a time, with a fresh baked cookie. Okay.  And with a coffee.  And maybe some chocolate. But I promise to take my vitamins.',
            city: cities[7],
            country: 'Russia',
            region: 'Europe',
            language: ['English', 'Russian'],
            age: 33,
            gender: 'Female',
            email: 'annika@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Gan Chen',
            profilePicture: 'https://images.unsplash.com/photo-1497280485314-be775e3e2316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Fascinated by transactional nature of counterknowledge & public discourse in socially mediated spaces which simulate (but don’t engender) counter-public spheres.',
            city: cities[6],
            country: 'China',
            region: 'Asia',
            language: ['English', 'Mandarin'],
            age: 27,
            gender: 'Male',
            email: 'gan@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Halima Farhi',
            profilePicture: 'https://images.unsplash.com/photo-1549836938-d278c5d46d20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'I have a dream to help people through new lands, helping then to grow through experiences; achieving their dreams and freedom.',
            city: cities[5],
            country: 'Iran',
            region: 'Asia',
            language: ['English', 'Farci', 'Arabic', 'German'],
            age: 28,
            gender: 'Female',
            email: 'halima@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Omar Harrak',
            profilePicture: 'https://images.unsplash.com/photo-1520451160208-a741e481c527?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'The great loves of my life are people, travel, fine dining, cooking, writing, photography, art and hiking. Being a generous person, I am keen to share my discoveries with others who have similar interests.',
            city: cities[9],
            country: 'Morocco',
            region: 'Africa',
            language: ['English', 'Arabic', 'French'],
            age: 24,
            gender: 'Male',
            email: 'omar@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Martin Beaumont',
            profilePicture: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Rugby is my passion, Wellington is my world!',
            city: cities[12],
            country: 'New Zealand',
            region: 'Oceania',
            language: ['English', 'Dutch'],
            age: 37,
            gender: 'Male',
            email: 'martin@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Linnea Nilsson',
            profilePicture: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            about: 'I’ve learned I don’t know anything. Have also learned that people will pay for what I know. Life is good.',
            city: cities[10],
            country: 'Sweden',
            region: 'Europe',
            language: ['English', 'Swedish', 'German'],
            age: 21,
            gender: 'Female',
            email: 'linnea@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Diego Herbas',
            profilePicture: 'https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Passion led me here.',
            city: cities[13],
            country: 'Bolivia',
            region: 'South America',
            language: ['English', 'Spanish', 'Aymara'],
            age: 30,
            gender: 'Male',
            email: 'diego@mail',
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
            description: 'Pop-up restaurant in someone\'s home. A great way to meet new people, enjoy good food at a reasonable price, and get a taste of what a local dinner party is like. Spread all over London with different themes. I am happy to find the right ambience and experience you are looking for.',
            category: ['Food', 'Drink', 'Social'],
            intensity: 'Low',
            price: 50,
            unicorn: unicorns[17],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: 'Evening'
          },
          {
            name: 'Distillery tours and tastings in central London',
            image: 'http://www.maketh-the-man.com/wp-content/uploads/2014/12/2014-12-06-14.52.44.jpg',
            description: 'Thought you had to travel to the countryside for a distillery tour? Not anymore! Let me take you to some of London\'s most exciting indepepndent distilleries, including the East London Liqour Company.',
            category: ['Drink', 'Social'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[15],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: 'Afternoon'
          },
          {
            name: 'A new kind of theatre',
            image: 'https://d2qqnmbwcdc6ya.cloudfront.net/wp-content/uploads/2018/04/08181058/Bridge-Theatre-Exterior.jpg',
            description: 'There are lots of fantastic theatres in London, but have you hear of places like Bridge Theatre? If not, let me show you some of London\'s most interesting new theatres and what they have to offer.',
            category: ['Culture', 'Social'],
            intensity: 'Low',
            price: 0,
            unicorn: unicorns[17],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: 'Evening'
          },
          {
            name: 'Jazz in style',
            image: 'https://benumu.com/numuimage/by_id/1945',
            description: 'Love jazz but don\'t know where to go for an authentic and high quality experience? I\'ll show you all of my favourite jazz bars, including the institutions Ronnie Scott\'s and Vortex.',
            category: ['Culture', 'Social', 'Music'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[1],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: 'Evening'
          },
          {
            name: 'Eat your way through east London',
            image: 'https://i.pinimg.com/originals/1f/c6/b5/1fc6b56bf39d28b2f2a0d63a3eebe636.jpg',
            description: 'Do you identify as a trendy foodie (or at least wish you did)? Then this tour is for you! Let me take you to the tastiest places in East London. From pretty pastries at Pophams to a snazzy dinner at BISTROTHEQUE.',
            category: ['Food', 'Social'],
            intensity: 'Low',
            price: 50,
            unicorn: unicorns[1],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon', 'Evening'] 
          },
          {
            name: 'Food crawl',
            image: 'https://xyuandbeyond.com/wp-content/uploads/2018/03/borough-market-stalls.jpg',
            description: 'Like a pub crawl but with food, mostly street food and various hole-in-the-wall places. We will start off at Borough market and eat our way across London from there. ',
            category: ['Food', 'Social'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[17],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: ['Afternoon', 'Evening']
          },
          {
            name: 'Pub crawl',
            image: 'https://static.designmynight.com/uploads/2014/03/524492_10151469252969733_701697217_n-optimised.jpg',
            description: 'A great way to check out the great and quirky pubs in London. We will keep going until the last man(or woman!) standing!',
            category: ['Drink', 'Social'],
            intensity: 'Low',
            price: 15,
            unicorn: unicorns[15],
            availability: ['Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'The best bars you have never heard of, or at least never been to!',
            image: 'https://pbs.twimg.com/media/Dec6AlaX4AIP4rN.jpg',
            description: 'I\'ll show you a selection of my favourite bars in London that you have either never heard of (like the Archers wine bar), or you most likely haven\'t been to (like the members bar at the Tate Modern).',
            category: ['Drink', 'Social'],
            intensity: 'Low',
            price: 30,
            unicorn: unicorns[1],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'A picnic with a view',
            image: 'https://www.fairview.co.uk/assets/Uploads/_resampled/FillWyIxMTgwIiwiNTMwIl0/Parliament-Hill-320757935.jpg',
            description: 'You might have been to Hampstead Heath, but do you know the Heath like a local? I\'ll show you the best spots for a scenic picnic, and to make it extra special, there will be freshly made pies from the best pie makers in London (from the Pie Room).',
            category: ['Outdoors', 'Social', 'Food'],
            intensity: 'Low',
            price: 10,
            unicorn: unicorns[17],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            time: ['Afternoon']
          },
          {
            name: 'Unique shops',
            image: 'http://www.srlawpractice.in/wp-content/uploads/2018/08/photo-1521587760476-6c12a4b040da.jpg',
            description: 'I\'ll show you round some of the special and tucked away shops in London you probably never heard of. We will start off at Maggs Bros - the amazing vintage book shop for rare books and manuscripts.',
            category: ['Social'],
            intensity: 'Medium',
            price: 0,
            unicorn: unicorns[15],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'The best less-well-known restaurants in London',
            image: 'http://noblerot.co.uk/wp-content/uploads/2015/11/restaurant.jpeg',
            description: 'Crockers Folly, Noble Rot, Cambio Tercio, and Sushi Tetsu are just some of the many exquisite restaurants in London that you will never hear of as a tourist but where Londoners flock to for a great meal.',
            category: ['Food', 'Drink', 'Social'],
            intensity: 'Low',
            price: 60,
            unicorn: unicorns[15],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'The coolest art spaces in the famous Red October district',
            image: 'https://s.inyourpocket.com/gallery/190542.jpg',
            description: 'The Red October art district has become well-known to locals and tourists alike for showcasing some of the most exciting art in Moscow. I\'ll show you all the best places in the area that the tourists don\'t know about',
            category: ['Social', 'Culture', 'Outdoors'],
            intensity: 'Low',
            price: 10,
            unicorn: unicorns[11],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'The best meals in Moscow',
            image: 'https://cdni.rbth.com/rbthmedia/images/2018.06/article/5b2ba44e15e9f916c17e7e3d.jpg',
            description: 'Want to know where to get the best meals Moscow has to offer (including White Rabbit and Twins Garden), and help getting you that coveted table? This is the experience for you!',
            category: ['Food', 'Drink'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[20],
            availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Bars out of the ordinary',
            image: 'http://russia-ic.com/img/culture_art/jazz%20triumph458625f.jpg',
            description: 'Bored of fancy bars with overpriced cocktails and Moscow "face control"? If so, I will show you some of the hidden gems the city has to offer, including Igor Butman Jazz Club, and Strelka.',
            category: ['Drink', 'Social'],
            intensity: 'Low',
            price: 10,
            unicorn: unicorns[11],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Evening']
          },
          {
            name: 'Night out in the city that never sleeps',
            image: 'https://static.themoscowtimes.com/image/article_1360/dc/9ee3dab0d5f34a59966f52f86f6c1675.jpg',
            description: 'I will take you out on a night to be rememberd. The Moscow clubs scene has evolved a lot over the last decade and i will take you on a tour to some of the best places the Russian music scene has to offer today, with nods to Arma 17 which remains an insititution for this generation of Russian electronic music.',
            category: ['Social', 'Drink', 'Music'],
            intensity: 'High',
            price: 20,
            unicorn: unicorns[20],
            availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Local food heros',
            image: 'https://media.timeout.com/images/103937318/630/472/image.jpg',
            description: 'Want to find some of those special local foodie gems? Look no further! I will take you round some of the best places for food this city has to offer - from the cheap an cheerful (Pink Mamma and Le Scheffer) to the fancy but low-key (Table), just to name a few!',
            category: ['Food', 'Drink', 'Social'],
            intensity: 'Low',
            price: 100,
            unicorn: unicorns[8],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Museums off the beaten track',
            image: 'http://www.parciparla.com.br/wp-content/uploads/2011/02/musee-jacquemart-andre.jpg',
            description: 'Had enough of the Louvre and all the usual suspects? I\'ll take you on a tour of some of the more intersting museums Paris has to offer, starting with Musée Jacquemart-André.',
            category: ['Social', 'Culture'],
            intensity: 'Medium',
            price: 10,
            unicorn: unicorns[8],
            availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'A different kind of art',
            image: 'https://c1.staticflickr.com/1/939/29844212588_7b96e8f3d7_h_d.jpg',
            description: 'Been to every museum there is in this city and still craving more? I\'ll show you some of the more unique art experiences Paris has to offer, including Atelier des Lumières. Be prepared to have your mind blown.',
            category: ['Social', 'Culture', 'Outdoors'],
            intensity: 'Medium',
            price: 10,
            unicorn: unicorns[13],
            availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Best independent boutiques in Paris',
            image: 'https://media.architecturaldigest.com/photos/5a3d3fc738bb817b7ffe1f32/master/pass/RL_GAS_BIJOUX_11_1_2017-1346.jpg',
            description: 'Love shopping but bored of the mainstream stuff? Come with me as I show you my personal favourites, spread across the city. Stops will include my favourite jewelry brand - Gas Bijoux.',
            category: ['Social', 'Culture', 'Outdoors'],
            intensity: 'Medium',
            price: 0,
            unicorn: unicorns[13],
            availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Afternoon']
          },
          {
            name: 'Sacred beauty',
            image: 'https://d3hnyzq4jj54js.cloudfront.net/orig/pictures/12/84/128403/France-Paris-Saint-Sulpice-church-c-Daniel-Vorndran-Commons.jpg',
            description: 'Paris has almost 200 churches, on this tour I will take you to some of the most beautiful and lesser-known ones, including Église Saint-Sulpice. Whether you are a believer or not, I promise these churches will take your breath away.',
            category: ['Social', 'Culture', 'Outdoors'],
            intensity: 'Medium',
            price: 5,
            unicorn: unicorns[13],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Off the beaten track restaurants in Madrid',
            image: 'http://www.marisqueriaelpescador.net/wp-content/gallery/galeria-2-fotos-igual-tamano/12.jpg',
            description: 'Bored of tapas and paella? Want to dine like a local with the locals? I will take you to some of the best restaurants Madrid has to offer, including the exquisie OPAZO which serves the best carabiniero prawns in town.',
            category: ['Food', 'Drink'],
            intensity: 'Low',
            price: 80,
            unicorn: unicorns[3],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Best brunch places in the city',
            image: 'http://q-xx.bstatic.com/images/hotel/max500/460/46070489.jpg',
            description: 'After a long night out, who doesn\'t need a good brunch to recover?! I\'ll show you the best bruncc places this city has to offer, from the most amazing fresh tortilla stand to the fancy Wellington Hotel bottomless brunch with unlimited cava to match.',
            category: ['Food', 'Drink', 'Social'],
            intensity: 'Low',
            price: 50,
            unicorn: unicorns[3],
            availability: ['Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Street art tour through Madrid\'s trendiest neighbourhoods',
            image: 'https://www.mad4youhostel.com/wp-content/uploads/2019/08/1.jpg',
            description: 'Want to see the city from a different lens? Let me take you on a tour out of the ordinary, showing you my city through a trail of amazing street art. Our tour will take us to some of the most bustling of locations, many of which would will want to return to later for its food and nightlife.',
            category: ['Social', 'Culture', 'Outdoors'],
            intensity: 'Medium',
            price: 5,
            unicorn: unicorns[18],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon', 'Evening']
          },
          {
            name: 'See the city from the eyes of a moose',
            image: 'https://www.skansen.se/uploads-aws/Djur/alg.jpg',
            description: 'Want the best 360 degree views of Stockholm? Join me to visit the moose and other nordic animals at the outdoor animal park of Skansen - bang on a hill in the city centre.',
            category: ['Social', 'Outdoors'],
            intensity: 'Medium',
            price: 10,
            unicorn: unicorns[6],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Best restaurants in Stockholm you have never heard of',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/92/6b/ff/innenansicht.jpg',
            description: 'Come with me and dine like a local. Whether its fine dining at Adam/Albin, modern classics at Ilse or Lilla Ego, or classics like meatballs and toast skagen at Tennstopet - I can assure you, you won\'t leave hungry!',
            category: ['Social', 'Food', 'Drink'],
            intensity: 'Low',
            price: 80,
            unicorn: unicorns[6],
            availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Afternoon', 'Evening']
          },
          {
            name: 'A night out of the ordinary',
            image: 'https://andershusa.com/wp-content/uploads/2017/09/punk-royale-restaurant-review-stockholm-sweden-scandinavia-bizarre-hipster-paradise-caviar-vodka-food-foodie-eat-eating-best-tips-recommendation-guide-travel-2017-16.jpg',
            description: 'Party like a local! We will start off the night at the notorious Punk Royale where we will munch in foie gras in the shape of smilies while downing vodka as we are being shouted at by the chef for not drinking faster - all the the atmosphere of smoke machines, fellow guests breaking plates and loud punk rock blasted from the speakers. This will set the tone for the rest of our night...',
            category: ['Social', 'Drink', 'Food', 'Music'],
            intensity: 'High',
            price: 80,
            unicorn: unicorns[11],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Explore Venice of the north like it should be done - on a boat',
            image: 'https://www.stromma.com/globalassets/sweden/stockholm/product_slideshows/excursions/day_trips/gustavsberg/03_SKB_Gustafsberg-stromma-kanalbolaget?w=384',
            description: 'Explore the beautiful islands and waters in and around Stockholm on this boat hopping tour. We will start off with breakfast at Fjaderholmarna, stop for lunch at Grinda, and finish with dinner at Sandhamn, before returning to Stockholm city centre.',
            category: ['Social', 'Outdoors'],
            intensity: 'Medium',
            price: 10,
            unicorn: unicorns[11],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['All-Day']
          },
          {
            name: 'Learn to cook Swedish "husman" food',
            image: 'https://static.thatsup.co/content/img/article/16/mar/guiden-till-g%C3%B6teborgs-b%C3%A4sta-husmanskost.jpg',
            description: 'Learn to cook like a Swedish grandmother! Half a day of cooking together, finished off with lunch and local beer. You will get recipes in English to take home.',
            category: ['Social', 'Food'],
            intensity: 'Medium',
            price: 50,
            unicorn: unicorns[25],
            availability: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday'],
            time: ['Morning']
          },
          {
            name: 'Sumo wrestling',
            image: 'https://www.japan-guide.com/g8/2080_01.jpg',
            description: 'Get the chance to see some traditional sumo wrestling by coming along with me on this special tour.',
            category: ['Social', 'Sport', 'Culture'],
            intensity: 'Low',
            price: 80,
            unicorn: unicorns[19],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Afternoon', 'Evening']
          },
          {
            name: 'Kamakura city day trip',
            image: 'https://www.travelcaffeine.com/wp-content/uploads/2017/10/great-buddha-kamakura-japan-266.jpg',
            description: 'Get out of Tokyo for the day and come with me to Kamakura city. Here we will visit the famous Daibutsu, also know as the Great Buddha of Kamakura, but we will also explore some of the less-well-known parts of this stunning city, before returning to Tokyo in the evening.',
            category: ['Social', 'Culture'],
            intensity: 'Medium',
            price: 20,
            unicorn: unicorns[0],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['All-Day']
          },
          {
            name: 'Unique shopping trip for crafty people',
            image: 'https://media.timeout.com/images/102575427/630/472/image.jpg',
            description: 'Love arts and craft? Come with me on a colourful tour tof some of Tokyo\'s beaufitul second hand kimono shops for fabric, as well as the coolest arts and craft shops including ,the famous ribbon empire - Mokuba.',
            category: ['Social', 'Culture'],
            intensity: 'Medium',
            price: 0,
            unicorn: unicorns[0],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Immersive art experience',
            image: 'https://www.tokyoweekender.com/wp-content/uploads/2018/06/14532.jpeg',
            description: 'Come with me on this extraordinary immersive art tour. We will visit some of the most magical art installations, including teamLab Borderless.',
            category: ['Social', 'Culture'],
            intensity: 'Medium',
            price: 50,
            unicorn: unicorns[19],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Stationary heaven',
            image: 'https://svcstrg2.navitime.jp/curation/img/NTJtrv1171-en/Kakimori_Akihabara_shopping.jpg',
            description: 'Get inspired by the Japanese\' love for stationary and come with me on this unique tour to the best stationary shops in Tokyo. And of course this tour wouldn\'t be complete without a visit to the glorious Kakimori where you can have your bespoke notebooks made right in front of your eyes.',
            category: ['Social', 'Culture'],
            intensity: 'Medium',
            price: 0,
            unicorn: unicorns[0],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'King or queen of the kitchen? This tour is for you!',
            image: 'https://storage.googleapis.com/stateless-shop-echefknife-com/2018/04/57f8b690-ao3set_main.jpg?w=640g',
            description: 'Do you love to cooke? Then you also know how important a great knife is. Japan is famous for its razor sharp, super thin carbon steel knives, which have been beautifully handcrafted. Come with the to the cooking mecca neighbourhood of Kappabashi and I will show you all the best places!',
            category: ['Social'],
            intensity: 'Medium',
            price: 0,
            unicorn: unicorns[19],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Cocktails and magic?',
            image: 'https://i.ytimg.com/vi/tlt8EnvNvxA/maxresdefault.jpg',
            description: 'Expolre the best magic bars Tokyo has to offer. The delightful combination of cocktails and fantastic magic is hard to beat. And we will of course make a stop at Bar High Five and see the master Ueno san at work!',
            category: ['Social', 'Drink'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[19],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Foodie tour',
            image: 'https://savorjapan.com/contents/en/feature/img/008/feat02_ph01_s.jpg',
            description: 'You cannot come to Tokyo without going on this tour. I will take you to my favourite spots for everything from the best chicken wing yakitori at Bird Land, to the best tsukemen at Rokurinsha, and the delicious italian-japanese fusion of Savoy.',
            category: ['Social', 'Food', 'Drink'],
            intensity: 'Low',
            price: 40,
            unicorn: unicorns[0],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Fairytale cocktails',
            image: 'https://svcstrg2.navitime.jp/curation/img/NTJnews0014-en/n_mat0356_15.jpg',
            description: 'You cannot leave Tokyo without visiting some of its most magical bars! Let me take you on a journey through cocktails and fairies, including a stop at the magical The Iron Fairies.',
            category: ['Social', 'Drink'],
            intensity: 'Low',
            price: 40,
            unicorn: unicorns[19],
            availability: ['Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Learn some japanese cooking secrets',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/72/1d/5d/japanese-home-cooking.jpg',
            description: 'Learn the tricks of the craft that is Japanese cooking from my very own grandmother. Half a day of cooking together, finished off with lunch and some of my favourite sake. I will be translating throughout and you will get recipes in English to take home.',
            category: ['Social', 'Food'],
            intensity: 'Medium',
            price: 50,
            unicorn: unicorns[0],
            availability: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday'],
            time: ['Morning']
          },
          {
            name: 'Sample the best pizza in New York',
            image: 'https://assets3.thrillist.com/v1/image/1808335/size/tmg-venue_carousel_mobile.jpg',
            description: 'Lover of pizza? I will guide you through the jungle of pizza places and take you to the very BEST pizza places the city has to offer, including of course Roberta\'s which all of new york is infatuated with.',
            category: ['Social', 'Food'],
            intensity: 'Low',
            price: 10,
            unicorn: unicorns[2],
            availability: ['Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'],
            time: ['Afternoon', 'Evening']
          },
          {
            name: 'Coffee shop hopping',
            image: 'https://www.rd.com/wp-content/uploads/2019/03/shutterstock_129339416.jpg',
            description: 'Who can resist a really good cup of coffee? And with so much to see in this city, knowing where to pick up an amazing coffee will serve you well.',
            category: ['Social', 'Drink'],
            intensity: 'Low',
            price: 5,
            unicorn: unicorns[2],
            availability: ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Bowling 2.0',
            image: 'https://www.brooklynbowl.com/assets/img/carousel-34-808x494-3a3870de2b.jpg',
            description: 'Thought bowling was boring? Think again. Brooklyn bowl has taken the classic game and amped it up with amazing cocktails, food, and live music. Let me show you this and many of Brooklyn\'s other institution on this one-of-a-kind tours!',
            category: ['Social', 'Drink', 'Music', 'Food'],
            intensity: 'Medium',
            price: 20,
            unicorn: unicorns[16],
            availability: ['Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'Seal Coast Safari',
            image: 'https://images.unsplash.com/photo-1457542553555-6331c3c0855f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'A true off-road scenic adventure. Exclusive tours of New Zealand\'s rugged coast line, enjoy a coffee and a muffin whilst observing fur seals up close.',
            category: ['Outdoors'],
            intensity: 'Medium',
            price: 25,
            unicorn: unicorns[5],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Hike Mount Kaukau',
            image: 'https://images.unsplash.com/photo-1489996833391-87afa2532240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'Come scale the heights of Mount Kaukau, the highest point in Wellington with stunning views across the city, harbour and even as far as the south Island.',
            category: ['Outdoors'],
            intensity: 'High',
            price: 10,
            unicorn: unicorns[5],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            time: ['Morning']
          },
          {
            name: 'Train with the All Blacks',
            image: 'https://media.apnarm.net.au/media/images/2018/11/19/imagev1fb26a19dc80e5ea79d79836db1330759-t4fprwprvb41we9hbr2_t1880.jpg',
            description: 'Experience the power and might of the world famous New Zealand rugby team. View the training stadium, meet the players, play some rubgy and learn the haka.',
            category: ['Sport', 'Outdoors'],
            intensity: 'High',
            price: 100,
            unicorn: unicorns[5],
            availability: ['Saturday'],
            time: ['All-Day']
          },
          {
            name: 'Cuba Street',
            image: 'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/06/15064973444_035b8b5c3e_k.jpg',
            description: 'The bustling jewel at the centre of the capital. Join me for a day of touring the metropolitan, independant wonder that is Cuba Street. We\'ll frequent bars, coffee shops, thrift store, art galleries and take in the local live music scene.',
            category: ['Food', 'Drink', 'Music', 'Social', 'Culture'],
            intensity: 'Medium',
            price: 150,
            unicorn: unicorns[24],
            availability: ['Friday', 'Saturday'],
            time: ['All-Day']
          },
          {
            name: 'Intro to Special Effects Make-Up at the Weta Workshop',
            image: 'https://resources.stuff.co.nz/content/dam/images/1/f/4/l/n/i/image.related.StuffLandscapeSixteenByNine.620x350.1f4i3i.png/1477709186409.jpg',
            description: 'Learn the art of mixing fake blood and sculpting your own scars and scrapes. Price includes tour of the whole workshop, who\'s special effect work encompasses Lord of the Rings, Avatar and the Marvel Franchise',
            category: ['Culture', 'Social'],
            intensity: 'Low',
            price: 100,
            unicorn: unicorns[24],
            availability: ['Monday', 'Wednesday', 'Friday'],
            time: ['Evening']
          },
          {
            name: 'Glow Worm viewing in Zealandia',
            image: 'https://i.ytimg.com/vi/JC41M7RPSec/maxresdefault.jpg',
            description: 'Set in the world\'s first eco-sanctuary you can tour the depths of an old gold mine, home to New Zealand\'s indigenous glow worms. You might even glimpse sight of the elusive kiwi bird.',
            category: ['Culture', 'Outdoors'],
            intensity: 'Medium',
            price: 30,
            unicorn: unicorns[24],
            availability: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Evening']
          },
          {
            name: 'Empire Cinema and Eatery',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/5e/27/2b/empire-cinema-eatery.jpg',
            description: 'The perfect date location. Snuggle into double sofa seats and watch the latest blockbuster and indie movies. Enjoy a delicious dinner beforehand and take your drinks into the screening for the ultimate luxury movie experience.',
            category: ['Culture', 'Drink'],
            intensity: 'Low',
            price: 10,
            unicorn: unicorns[24],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Evening']
          },
          {
            name: 'Car Horn Beeping in the Mount Victoria Tunnel',
            image: 'https://arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/6KPXK4JUSVBONNN3J5YZZLI6S4.jpg',
            description: 'Come and be part of a Wellington resident tradition - it\'s said the mood of the city can be determined by the car horn beeping in Mount Victoria tunnel - come and be part of it!',
            category: ['Outdoors', 'Social'],
            intensity: 'Low',
            price: 0,
            unicorn: unicorns[24],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['All-Day']
          },
          {
            name: 'Marina Bay Sands Rooftop Infinity Pool',
            image: 'https://images.unsplash.com/photo-1536625737227-92a1fc042e7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'Feel like you\'re floating above the city in a watery paradise, with views for miles. Order a Singapore Sling and don\'t forget your suncream',
            category: ['Outdoors', 'Culture', 'Social'],
            intensity: 'Low',
            price: 30,
            unicorn: unicorns[9],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['All-Day']
          },
          {
            name: 'Hawker Food Markets',
            image: 'http://www.asiaone.com/sites/default/files/original_images/May2019/hawkercentre_st.jpg',
            description: 'Taste the flavours of the Orient, Come explore the world-famous Hawker Markets and find you new favourite flavour.',
            category: ['Food', 'Culture'],
            intensity: 'Medium',
            price: 5,
            unicorn: unicorns[9],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Evening']
          },
          {
            name: 'Gardens by the Bay',
            image: 'https://images.unsplash.com/photo-1441805983468-f5a1a9f985fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            description: 'Located by the Marina Bay Waterfront in the heart of Singapore. Escape the city buzz, don\'t miss the indoor waterfall, flower dome or the iconic supertree walkway',
            category: ['Culture', 'Outdoors'],
            intensity: 'Medium',
            price: 20,
            unicorn: unicorns[9],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['All-Day']
          },
          {
            name: 'Soek Seng 1954 Bicycle Cafe',
            image: 'https://3.bp.blogspot.com/-t3VzPAxXaOg/VvqigdOPYUI/AAAAAAABKzQ/j6HdCK9KFgg_88YOQsGPQbgG4uS_H5DyQ/s1600/06%2BSGD_9670%2BSoek%2BSeng%2B1954%2BBicycle%2BCafe%2B%2540%2BMAJ%2BAviation%2BBuilding%2B%2528Beside%2BSeletar%2BAirport%2529%2B%2528Large%2529.JPG',
            description: 'Dine alfresco whilst watching the private planes take off and land from the neighbouring Seletar Airport',
            category: ['Outdoors', 'Food'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[9],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Walkthough The Witches Market',
            image: 'http://pinkplankton.com/wp-content/uploads/2015/11/witchmarket1.jpg',
            description: 'The Witches Market, also known as El Mercado de las Brujas and La Hechiceria, is a popular tourist attraction located in Cerro Cumbre, a mountain clearing in La Paz.',
            category: ['Outdoors', 'Culture'],
            intensity: 'Medium',
            price: 10,
            unicorn: unicorns[7],
            availability: ['Monday', 'Wednesday', 'Friday'],
            time: ['Afternoon']
          },
          {
            name: 'The Moon Valley Adventure',
            image: 'https://live.staticflickr.com/7849/47054529721_d3c4d49a89_b.jpg',
            description: ' It consists of an area where erosion has worn away the majority of a mountain, composed primarily of clay rather than rock, leaving tall spires.',
            category: ['Outdoors'],
            intensity: 'Medium',
            price: 20,
            unicorn: unicorns[7],
            availability: ['Monday', 'Wednesday', 'Friday'],
            time: ['Morning']
          },
          {
            name: 'Discover The Calle Jaen',
            image: 'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/789181_Viator_Shutterstock_460107.jpg',
            description: 'Steep, narrow cobblestone alley lined with brightly colored colonial houses, cafes & museums.',
            category: ['Outdoors', 'Culture', 'Food'],
            intensity: 'Low',
            price: 5,
            unicorn: unicorns[7],
            availability: ['Tuesday', 'Thursday'],
            time: ['Morning']
          },
          {
            name: 'The Calle Jaen',
            image: 'https://www.magriturismo.com/magritours/wp-content/uploads/revslider/bolivia/Teleferico-Reduced_V1.jpg',
            description: 'As of September 2018, the system consists of 25 stations along eight lines: Red, Yellow, Green, Blue, Orange, White, Sky Blue, and Purple.',
            category: ['Outdoors'],
            intensity: 'High',
            price: 10,
            unicorn: unicorns[26],
            availability: ['Tuesday', 'Thursday'],
            time: ['Afternoon']
          },
          {
            name: 'Cycling The Dead Road',
            image: 'https://www.lapazlife.com/wp-content/uploads/2014/06/death-road-bolivia.jpg',
            description: 'The Yungas Road is a cycle route about 60 km long which links the city of La Paz and the Yungas region of Bolivia.',
            category: ['Outdoors'],
            intensity: 'High',
            price: 50,
            unicorn: unicorns[26],
            availability: ['Sunday'],
            time: ['All-Day']
          },
          {
            name: 'Magic Chapultepec Forest',
            image: 'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/03/CHAPULTEPEC-XVIII.jpg',
            description: 'Chapultepec, more commonly called the "Bosque de Chapultepec", is one of the largest city parks in the Western Hemisphere, measuring in total just over 686 hectares.',
            category: ['Outdoors'],
            intensity: 'Low',
            price: 15,
            unicorn: unicorns[4],
            availability: ['Monday', 'Wednesday'],
            time: ['Morning']
          },
          {
            name: 'Visit The Zócalo',
            image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/C480/production/_108640305_gettyimages-1132330190.jpg',
            description: 'Prior to the colonial period, it was the main ceremonial center in the Aztec city of Tenochtitlan.',
            category: ['Outdoors'],
            intensity: 'Low',
            price: 10,
            unicorn: unicorns[4],
            availability: ['Tuesday', 'Thursday'],
            time: ['Morning']
          },
          {
            name: 'Street Food, The Best Food',
            image: 'https://assets.bonappetit.com/photos/5c06e9376d25022d06082800/16:9/w_2560%2Cc_limit/DylanJeni_BA_MexicoCityFood_07.jpg',
            description: 'Mexican street food, called antojitos, is prepared by street vendors and at small traditional markets in Mexico.',
            category: ['Food'],
            intensity: 'Medium',
            price: 5,
            unicorn: unicorns[4],
            availability: ['Sunday'],
            time: ['Afternoon']
          },
          {
            name: 'Quad-Biking In The Desert',
            image: 'https://cdn.getyourguide.com/img/tour_img-1308260-145.jpg',
            description: 'I invite you to join us on this amazing journey to the largest desert in the world- The Marrakech Desert.',
            category: ['Outdoors'],
            intensity: 'High',
            price: 70,
            unicorn: unicorns[10],
            availability: ['Sunday'],
            time: ['All-Day']
          },
          {
            name: 'Expedition On A Camel',
            image: 'https://cdn.getyourguide.com/img/tour_img-2471030-145.jpg',
            description: 'Discover numerous Berber villages and a set of waterfalls close to the Ourika village itself.',
            category: ['Outdoors'],
            intensity: 'Medium',
            price: 30,
            unicorn: unicorns[10],
            availability: ['Monday', 'Wednesday'],
            time: ['All-Day']
          },
          {
            name: 'Tagine Cookery Class With a Local',
            image: 'https://cdn.getyourguide.com/img/tour_img-1128039-145.jpg',
            description: 'Learn to cook authentic Moroccan tagines in Marrakech.',
            category: ['Food'],
            intensity: 'Low',
            price: 25,
            unicorn: unicorns[10],
            availability: ['Tuesday', 'Thursday'],
            time: ['Morning']
          },
          {
            name: 'Colourful Souks Tour',
            image: 'https://cdn.getyourguide.com/img/tour_img-2464875-145.jpg',
            description: 'Get a special in-depth feel for various sections of the market.',
            category: ['Culture'],
            intensity: 'Low',
            price: 15,
            unicorn: unicorns[10],
            availability: ['Friday'],
            time: ['Morning']
          },
          {
            name: 'Casablanca to Marrakech Day Trip',
            image: 'https://cdn.getyourguide.com/img/tour_img-344263-145.jpg',
            description: 'Discover the imperial beauty of Marrakech on a 9-hour tour of the “Red City” from Casablanca.',
            category: ['Outdoors'],
            intensity: 'Medium',
            price: 90,
            unicorn: unicorns[23],
            availability: ['Sunday'],
            time: ['Afternoon']
          },
          {
            name: 'Meet The Marrakesh Monuments',
            image: 'https://cdn.getyourguide.com/img/tour_img-348125-145.jpg',
            description: 'Go to one of the largest mosques of the western Muslim world, visit traditional souks and more.',
            category: ['Outdoors'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[23],
            availability: ['Monday', 'Tuesday'],
            time: ['All-Day']
          },
          {
            name: '3 Days In The Desert',
            image: 'https://cdn.getyourguide.com/img/tour_img-1478182-145.jpg',
            description: 'See the Kasbah of Ouarzazate, and much more.',
            category: ['Food'],
            intensity: 'High',
            price: 80,
            unicorn: unicorns[23],
            availability: ['Wednesday', 'Thursday', 'Friday'],
            time: ['All-Day']
          },
          {
            name: 'Oasis Experience',
            image: 'https://cdn.getyourguide.com/img/tour_img-2584468-145.jpg',
            description: 'Enjoy a unique experience in Morocco as you paddle and inflatable board down a river in the middle of the desert.',
            category: ['Outdoors'],
            intensity: 'Medium',
            price: 70,
            unicorn: unicorns[23],
            availability: ['Sunday'],
            time: ['Morning']
          },
          {
            name: 'Helicopter Ride',
            image: 'https://cdn.getyourguide.com/img/tour_img-1718257-145.jpg',
            description: 'Fly in your private helicopter between major airports and Manhattan and enjoy scenic views on the way.',
            category: ['Outdoors'],
            intensity: 'High',
            price: 1800,
            unicorn: unicorns[2],
            availability: ['Monday', 'Wednesday', 'Friday'],
            time: ['All-Day']
          },
          {
            name: 'Classic New York',
            image: 'https://cdn.getyourguide.com/img/tour_img-1737331-145.jpg',
            description: 'Tour the world-class attractions Statue of Liberty, Statue of Liberty Museum and Ellis Island at your own pace with accompanying audio guides.',
            category: ['Culture'],
            intensity: 'Medium',
            price: 90,
            unicorn: unicorns[2],
            availability: ['Sunday'],
            time: ['Afternoon']
          },
          {
            name: 'Christmas Magic Tour',
            image: 'https://cdn.getyourguide.com/img/tour_img-1418378-145.jpg',
            description: 'The ultimate Christmas experience in New York City.',
            category: ['Culture'],
            intensity: 'Low',
            price: 25,
            unicorn: unicorns[16],
            availability: ['Wednesday', 'Friday'],
            time: ['Afternoon']
          },
          {
            name: 'Central Park Hidden Secrets',
            image: 'https://images.adsttc.com/media/images/5bc8/ad3b/f197/cc6b/2200/03c9/slideshow/06_Alternative-Central-Park-6.jpg?1539878195',
            description: 'Central Park is an urban park in Manhattan, New York City, located between the Upper West Side and the Upper East Side.',
            category: ['Outdoors'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[16],
            availability: ['Sunday', 'Monday'],
            time: ['All-Day']
          },
          {
            name: 'Shanghai City Walk And Hidden Gems',
            image: 'https://www.chinadaily.com.cn/travel/img/attachement/jpg/site1/20151109/wires_1447050677656_middle.jpg',
            description: 'The Bund or Waitan is a waterfront area in central Shanghai.',
            category: ['Outdoors'],
            intensity: 'Low',
            price: 10,
            unicorn: unicorns[12],
            availability: ['Monday','Tuesday'],
            time: ['Afternoon']
          },
          {
            name: 'Yu Garden or Yuyuan Garden Adventure',
            image: 'https://blog.airpaz.com/wp-content/uploads/YU-YUAN-GARDEN.png',
            description: 'Yu Garden or Yuyuan Garden is an extensive Chinese garden located in the northeast of the Old City of Shanghai at Huangpu Qu, Shanghai Shi.',
            category: ['Outdoors'],
            intensity: 'Medium',
            price: 20,
            unicorn: unicorns[12],
            availability: ['Sunday','Wednesday'],
            time: ['Morning']
          },
          {
            name: 'Street food in Shanghai',
            image: 'https://blog.urbanadventures.com/wp-content/uploads/2018/05/shanghai_street_food.jpeg',
            description: 'There are a few famous Shanghai snacks streets. For local Shanghai native or new visitors, they will go to the snack street looking for local-flavored food.',
            category: ['Food'],
            intensity: 'Low',
            price: 5,
            unicorn: unicorns[21],
            availability: ['Monday', 'Wednesday'],
            time: ['Afternoon']
          },
          {
            name: 'Biking Through Shanghai',
            image: 'https://www.adventurecycling.org/sites/default/assets/Image/blog/Guest%20Posts/KarlSchlinger/radler_in_shanghai_707x461.jpg',
            description: 'Despite its busy reputation, Shanghai is a very bike-friendly city. With such a gorgeous mix of old and new architecture, it’s the perfect place to explore on two wheels.',
            category: ['Outdoors'],
            intensity: 'Medium',
            price: 25,
            unicorn: unicorns[21],
            availability: ['Sunday', 'Friday'],
            time: ['All-Day']
          },
          {
            name: 'Must see\'s and some hidden gems',
            image: 'https://www.tappersia.com/wp-content/uploads/2018/08/Golestan-Palace-Tehran-UNESCO-Sites-TAP-Persia3-1.jpg',
            description: 'Tehran is full of beautiful museums, buildings, and gardens, including UNESCO world herritage site Golestan Palace, and the extraordinary Treasury of National Jewels chamber. I will take you on a tour of my favourite sites and give you the inside track on the history behind them.',
            category: ['Outdoors', 'Culture'],
            intensity: 'Medium',
            price: 5,
            unicorn: unicorns[14],
            availability: ['Tuesday', 'Wednesday', 'Thursday'],
            time: ['All-Day']
          },
          {
            name: 'Persian rugs galore',
            image: 'https://media.mehrnews.com/d/2019/02/18/4/3051022.jpg',
            description: 'Persian rugs are world-famous, and with good reason. A true persian rug is a handmade masterpeice that can take years to complete and with the finest wool or silk money can buy. But knowing where to go to find good quality for a reasonable price can be difficult if you are new to the city (and don\'t speak Farci). Let me take you round the the best vendors, off the beaten tourist track. No commission!',
            category: ['Social', 'Culture'],
            intensity: 'Low',
            price: 0,
            unicorn: unicorns[14],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Modern art galleries the locals love',
            image: 'https://images.saatchiart.com/saatchi/904263/art/3322502/2392389-NANHAVST-7.jpg',
            description: 'Tehran has a bustling art scene that doesn\'t get much attention in the international media. Let me take you on an art tour that will make you think you are London or NYC when it comes to talent. Etemad Gallery will be one of our first stops - known for showcasing some of Iran\'s most exciting new modern (and often controversial) artists.',
            category: ['Social', 'Culture'],
            intensity: 'Medium',
            price: 5,
            unicorn: unicorns[22],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          },
          {
            name: 'Enjoy extraordinary coffee and pastry in cafes without having to wear your hijab...',
            image: 'https://331mrnu3ylm2k3db3s1xd1hg-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/Sprudge-CafeRoberto-SafaHaratian-_8HG4540-copy-740x494.jpg',
            description: 'The north of Tehran is where all the glam is and the sleek and stylish hang out. To cater for them, cafes like Roberto Cafe and Saboos Bakery have become trndy brunch and coffee institutions. The vibe is most certianly NY\'s Brooklyn meets London\'s Mayfair and its not uncommon to see ladies take their hijabs off, despite it technically being against the law. Let me show you this part of our beautiful city and the wonderful people in it.',
            category: ['Social', 'Food', 'Drink'],
            intensity: 'Low',
            price: 0,
            unicorn: unicorns[22],
            availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            time: ['Morning', 'Afternoon', 'Evening']
          },
          {
            name: 'The most scenic dinner in Tehran',
            image: 'https://www.likealocalguide.com/media/cache/78/cf/78cfc330d3c978beaba659bbad0f0f2f.jpg',
            description: 'Let me take you up to Darband for an evening, showing you the most stunning, romantic restaurants in our city. And we can find a lovely place to share a ghelyoon (shisha) after dinner, if that would be of interest.',
            category: ['Social', 'Food', 'Drink'],
            intensity: 'Low',
            price: 20,
            unicorn: unicorns[22],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Evening']
          },
          {
            name: 'The Bazaar done the way the locals do it',
            image: 'https://thecitylane.com/wp-content/uploads/2015/08/DSCF8063.jpg',
            description: 'There are a few different bazaars in Tehran, but the Grand Bazaar is the crown jewel. However being inside it can feel like being the a needle in a haystack. Let me guide you through the 10km of stalls and shops, teach you how to haggle the iranian way, and get the the best quality of everything from tea to saffron.',
            category: ['Social', 'Food', 'Drink', 'Outdoors'],
            intensity: 'Medium',
            price: 0,
            unicorn: unicorns[14],
            availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
            time: ['Morning', 'Afternoon']
          }
        ])
      })
      .then(experiences => console.log(`${experiences.length} experiences created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)