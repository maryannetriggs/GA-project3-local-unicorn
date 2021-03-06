const Traveller = require('../models/Traveller')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  Traveller
    .create(req.body)
    .then(traveller => res.status(201).json(traveller))
    .catch(next)
}

function login(req, res) {
  console.log(req.body)
  Traveller
    .findOne({ email: req.body.email })
    .then(traveller => {
      console.log(traveller)
      if (!traveller || !traveller.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Please check your details' })
      }
      const token = jwt.sign({ sub: traveller._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ message: `Welcome back, ${traveller.name}`, token })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

// SECURE ROUTE FOR LOGGED IN TRAVELLER ONLY:
function travellerProfile(req, res) {
  Traveller
    .findById(req.currentTraveller._id)
    .then(traveller => res.status(200).json(traveller))
    .catch(err => res.json(err))
}

// SECURE ROUTE FOR LOGGED IN TRAVELLER ONLY:
function updateTravellerProfile(req, res, next) {
  Traveller
    .findById(req.currentTraveller._id)
    .then(traveller => {
      if (!traveller.equals(req.currentTraveller._id)) return res.status(401).json({ message: 'You are not authorized to edit this profile' })
      return traveller.set(req.body)
    })
    .then(traveller => traveller.save())
    .then(traveller => res.status(202).json(traveller))
    .catch(next)
}

// SECURE ROUTE FOR LOGGED IN TRAVELLER ONLY:
function deleteTravellerProfile(req, res) {
  Traveller
    .findById(req.currentTraveller._id)
    .then(traveller => {
      if (!traveller.equals(req.currentTraveller._id)) return res.status(401).json({ message: 'You are not authorized to delete this profile' })
      return traveller.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.satus(400).json(err))
}

// WE NEED TO MAKE THIS PAGE UNACCESSIBLE! 
function index(req, res) {
  Traveller
    .find()
    .then(travellers => res.status(200).json(travellers))
    .catch(() => res.status(404).json({ message: 'Not found' }))
}

module.exports = {
  register,
  login,
  travellerProfile,
  updateTravellerProfile,
  deleteTravellerProfile,
  index
}