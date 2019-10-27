const Exp = require('../models/Exp')

function index(req, res) {
  Exp
    .find()
    .populate('unicorn')
    .populate('reviews.traveller')
    .then(experiences => res.status(200).json(experiences))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

function show(req, res) {
  Exp
    .findById(req.params.id)
    .populate('unicorn')
    .populate('reviews.traveller')
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

// SECURE ROUTE FOR LOGGED IN UNICORN AUTHOR OF THE EXPERIENCE ONLY:
function update(req, res, next) {
  req.body.unicorn = req.currentUnicorn
  Exp
    .findById(req.params.id)
    .populate('unicorn')
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Experience not found' })
      if (!experience.unicorn.equals(req.currentUnicorn._id)) return res.status(401).json({ message: 'You are not authorized to edit this experience' })
      return experience.set(req.body)
    })
    .then(experience => experience.save())
    .then(experience => res.status(202).json(experience))
    .catch(next)
}

// SECURE ROUTE FOR LOGGED IN UNICORN AUTHOR OF THE EXPERIENCE ONLY:
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

// We still might want to try to make it so that you can only review experiences AFTER you have booked them - but i haven't even begun to think about how we would do that.
// SECURE ROUTE FOR LOGGED IN TRAVELLER ONLY:
function reviewCreate(req, res, next) {
  req.body.traveller = req.currentTraveller
  Exp
    .findById(req.params.id)
    .populate('reviews.traveller')
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Experience not available for review' })
      experience.reviews.push(req.body)
      return experience.save()
    })
    .then(experience => res.status(201).json(experience))
    .catch(next)
}

function reviewShow(req, res) {
  Exp
    .findById(req.params.id)
    .populate('reviews.traveller')
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Experience not found' })
      const review = experience.reviews.id(req.params.reviewId)
      res.status(200).json(review)
    })
    .catch(() => res.status(404).json({ message: 'Something went wrong'  }))
}

// SECURE ROUTE FOR LOGGED IN TRAVELLER AUTHOR OF THE REVIEW ONLY:
function reviewUpdate(req, res, next) {
  req.body.traveller = req.currentTraveller
  Exp
    .findById(req.params.id)
    .populate('reviews.traveller')
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

// SECURE ROUTE FOR LOGGED IN TRAVELLER AUTHOR OF THE REVIEW ONLY:
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

