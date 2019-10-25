const City = require('../models/City')

function index(req, res) {
  City
    .find()
    .then(cities => res.status(200).json(cities))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

function show(req, res) {
  City
    .findById(req.params.id)
    .then(city => {
      if (!city) return res.status(404).json({ message: 'City not found' })
      res.status(200).json(city)
    })
    .catch(() => res.status(404).json({ message: 'Something went wrong' }))
}

module.exports = {
  index,
  show
}