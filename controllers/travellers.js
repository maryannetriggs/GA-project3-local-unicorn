const Traveller = require('../models/Traveller')

function index(req, res) {
  Traveller
    .find()
    .then(travellers => res.status(200).json(travellers))
    .catch(() => res.status(404).json({ message: 'Not found' }))
}

function profile(req, res) {
  Traveller
    .findById(req.params.id)
    .then(traveller => {
      if (!traveller) return res.status(404).json({ message: 'Traveller not found' })
      res.status(200).json(traveller)
    })
    .catch(() => res.status(404).json({ message: 'Something went wrong' }))
}

module.exports = {
  index,
  profile
}