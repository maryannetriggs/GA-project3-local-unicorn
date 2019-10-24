const Traveller = require('../models/Traveller')

function index(req, res) {
  Traveller
    .find()
    .then(travellers => res.status(200).json(travellers))
    .catch(() => res.status(404).json({ message: 'Not found' }))
}

module.exports = {
  index
}