const Exp = require('../models/Exp')

function index(req, res) {
  Exp
    .find()
    .then(experiences => res.status(200).json(experiences))
    .catch(() => res.status(404).json({ message: 'Not found' }))
}

module.exports = {
  index
}