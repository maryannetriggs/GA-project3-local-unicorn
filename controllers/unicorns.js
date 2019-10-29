const Unicorn = require('../models/Unicorn')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function registerUnicorn(req, res, next) {
  Unicorn
    .create(req.body)
    .then(unicorn => res.status(201).json(unicorn))
    .catch(next)
}

function loginUnicorn(req, res) {
  Unicorn
    .findOne({ email: req.body.email })
    .then(unicorn => {
      if (!unicorn || !unicorn.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Please check your details' })
      }
      const token = jwt.sign({ sub: unicorn._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ message: `Welcome back, ${unicorn.name}`, token })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}


function unicornProfile(req, res) {
  Unicorn
    .findById(req.currentUnicorn._id)
    .then(unicorn => res.status(200).json(unicorn))
    .catch(err => res.json(err))
}

// SECURE ROUTE FOR LOGGED IN UNICORN ONLY:
function updateUnicornProfile(req, res, next) {
  Unicorn
    .findById(req.currentUnicorn._id)
    .then(unicorn => {
      if (!unicorn.equals(req.currentUnicorn._id)) return res.status(401).json({ message: 'You are not authorized to edit this profile' })
      return unicorn.set(req.body)
    })
    .then(unicorn => unicorn.save())
    .then(unicorn => res.status(202).json(unicorn))
    .catch(next)
}

// SECURE ROUTE FOR LOGGED IN UNICORN ONLY:
function deleteUnicornProfile(req, res) {
  Unicorn
    .findById(req.currentUnicorn._id)
    .then(unicorn => {
      if (!unicorn.equals(req.currentUnicorn._id)) return res.status(401).json({ message: 'You are not authorized to delete this profile' })
      return unicorn.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.satus(400).json(err))
}

function index(req, res) {
  Unicorn
    .find()
    .populate('city')
    .then(unicorns => res.status(200).json(unicorns))
    .catch(() => res.status(400).json({ message: 'Not found' }))
}

function show(req, res) {
  Unicorn
    .findById(req.params.id)
    .then(unicorn => {
      if (!unicorn) return res.status(404).json({ message: 'Unicorn not found' })
      res.status(200).json(unicorn)
    })
    .catch(() => res.status(404).json({ message: 'Something went wrong' }))
}

module.exports = {
  registerUnicorn,
  loginUnicorn,
  unicornProfile,
  updateUnicornProfile,
  deleteUnicornProfile,
  index,
  show
}