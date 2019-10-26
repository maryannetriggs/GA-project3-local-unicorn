const Exp = require('../models/Exp')

function index(req, res) {
  Exp
    .find()
    .then(experiences => res.status(200).json(experiences))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

function show(req, res) {
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Experience not found' })
      res.status(200).json(experience)
    })
    .catch(() => res.status(404).json({ message: 'Something went wrong'  }))
}

// SECURE ROUTE FOR LOGGED IN UNICORN ONLY:
function create(req, res, next) {
  req.body.unicorn = req.currentUnicorn
  Exp
    .create(req.body)
    .then(experience => res.status(201).json(experience))
    .catch(next)
}

// SECURE ROUTE FOR LOGGED IN UNICORN ONLY:
function update(req, res, next) {
  req.body.unicorn = req.currentUnicorn
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Experience not found' })
      if (!experience.unicorn.equals(req.currentUnicorn._id)) return res.status(401).json({ message: 'You are not authorized to edit this experience' })
      return experience.set(req.body)
    })
    .then(experience => experience.save())
    .then(experience => res.status(202).json(experience))
    .catch(next)
}

// SECURE ROUTE FOR LOGGED IN UNICORN ONLY:
function remove(req, res) {
  req.body.unicorn = req.currentUnicorn
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience.unicorn.equals(req.currentUnicorn._id)) return res.status(401).json({ message: 'You are not authorized to delete this experience' })
      return experience.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

// CAN WE MAKE IT SO THAT YOU CAN ONLY REVIEW EXPERIENCES YOU HAVE BOOKED? 
// And add the populate part!

// SECURE ROUTE FOR LOGGED IN TRAVELLER ONLY:
function reviewCreate(req, res, next) {
  req.body.traveller = req.currentTraveller
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Experience not available for review' })
      experience.reviews.push(req.body)
      return experience.save()
    })
    .then(experience => res.status(201).json(experience))
    .catch(next)
}

// IM NOT SURE THIS WILL WORK:
function reviewShow(req, res) {
  Exp
    .findById(req.params.reviewId)
    .then(review => {
      if (!review) return res.status(404).json({ message: 'Review not found' })
      res.status(200).json(review)
    })
    .catch(() => res.status(404).json({ message: 'Something went wrong'  }))
}

// And add the populate part!

// SECURE ROUTE FOR LOGGED IN TRAVELLER ONLY:
function reviewUpdate(req, res, next) {
  req.body.traveller = req.currentTraveller
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Review not found' })
      const review = experience.reviews.id(req.params.reviewId)
      if (!review.traveller.equals(req.currentTraveller._id)) return res.status(401).json({ message: 'You are not authorized to edit this review' })
      review.set(req.body)
      return experience.save() 
    })
    .then(experience => res.status(202).json(experience))
    .catch(next)
}

// SECURE ROUTE FOR LOGGED IN TRAVELLER ONLY:
function reviewDelete(req, res) {
  req.body.traveller = req.currentTraveller
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Review not found' })
      const review = experience.reviews.id(req.params.reviewId)
      if (!review.traveller.equals(req.currentTraveller._id)) return res.status(401).json({ message: 'You are not authorized to delete this review' })
      review.remove()
      return experience.save()
    })
    .then(experience => res.status(202).json(experience))
    .catch(err => res.status(err))
}

module.exports = {
  index,
  show,
  create,
  update,
  remove,
  reviewCreate,
  reviewShow,
  reviewUpdate,
  reviewDelete
}