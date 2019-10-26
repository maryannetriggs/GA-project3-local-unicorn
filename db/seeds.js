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
            description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.',
            country: 'United Kingdom',
            region: 'Europe'
          },
          {
            name: 'New York',
            image: 'https://i.ytimg.com/vi/CsxkGDhf2Rw/maxresdefault.jpg',
            description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.',
            country: 'USA',
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
            region: 'North America'
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
            name: 'Sydney',
            image: 'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200',
            description: 'Sydney, capital of New South Wales and one of Australia\'s largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.',
            country: 'Australia',
            region: 'Oceania'
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
            about: 'Motorbike lover, if it war for me I would travel the world on my bike',
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
            about: 'Citicen of the world',
            country: 'USA',
            experiences: 9,
            email: 'alba@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Marco',
            profilePicture: 'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Pizza, Pizza, Pizza',
            country: 'Itali',
            experiences: 5,
            email: 'marco@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Antonio',
            profilePicture: 'https://i.pinimg.com/originals/74/0e/7a/740e7a48d16bfa9d73002653464f96e2.jpg',
            about: 'Cray traveller and animal lover',
            country: 'Spain',
            experiences: 2,
            email: 'antonio@mail',
            password: 'pass',
            passwordConfirmation: 'pass'
          },
          {
            name: 'Ciara',
            profilePicture: 'https://images.unsplash.com/photo-1541943181603-d8fe267a5dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Passionate for traveling and meeting new people',
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
            profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
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
            profilePicture: 'https://images.unsplash.com/photo-1552358155-515e264cb8b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            about: 'Just book a tour with me already',
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