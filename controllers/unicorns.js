const Unicorn = require('../models/Unicorn')

function index(req, res) {
  Unicorn
    .find()
    .then(unicorns => res.status(200).json(unicorns))
    .catch(() => res.status(400).json({ message: 'Not found' }))
}

module.exports = {
  index
}