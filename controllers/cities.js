const City = require('../models/City')

function index(req, res) {
  City
    .find()
    .populate('user')
    .then(cities => res.status(200).json(cities))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

module.espoers = {
  index
}