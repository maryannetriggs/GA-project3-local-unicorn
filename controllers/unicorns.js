const Unicorn = require('../models/Unicorn')

function index(req, res) {
  Unicorn
    .find()
    .then(unicorns => res.status(200).json(unicorns))
    .catch(() => res.status(400).json({ message: 'Not found' }))
}

function profile(req, res) {
  Unicorn
    .findById(req.params.id)
    .then(unicorn => {
      if (!unicorn) return res.status(404).json({ message: 'No unicorn found' })
      res.status(200).json(unicorn)
    })
    .catch(() => res.status(404).json({ message: 'Something went wrong' }))
}

module.exports = {
  index,
  profile
}