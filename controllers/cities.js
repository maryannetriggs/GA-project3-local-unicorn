const City = require('../models/City')

function index(req, res) {
  City
    .find()
    .then(cities => res.status(200).json(cities))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

module.exports = {
  index
}