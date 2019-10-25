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

// update with obligation to be logged in as a unicorn to be able to create an experience later! And add the populate part!
function create(req, res, next) {
  Exp
    .create(req.body)
    .then(experience => res.status(201).json(experience))
    .catch(next)
}

// update with obligation to be logged in as a unicorn to be able to update an experience later - there is more to add in to this one compared to the create one! 
// And add the populate part!
function update(req, res, next) {
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Experience not found' })
      return experience.set(req.body)
    })
    .then(experience => experience.save())
    .then(experience => res.status(202).json(experience))
    .catch(next)
}

// update with obligation to be logged in as a traveller to be able to delete YOUR experience!
function remove(req, res) {
  Exp
    .findById(req.params.id)
    .then(experience => experience.remove())
    .then(() => res.sendStatus(204))
    .catch(err => res.status(400).json(err))
}

// update with obligation to be logged in as a traveller to be able to create a review, and ONLY ON YOUR OWN BOOKED ONES! And add the populate part!
function reviewCreate(req, res, next) {
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

// update with obligation to be logged in as a traveller to be able to delete YOUR review! And add the populate part!
function reviewUpdate(req, res, next) {
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Review not found' })
      const review = experience.reviews.id(req.params.reviewId)
      review.set(req.body)
      return experience.save() 
    })
    .then(experience => res.status(202).json(experience))
    .catch(next)
}

// update with obligation to be logged in as a traveller to be able to delete YOUR review! And add the populate part!
function reviewDelete(req, res) {
  Exp
    .findById(req.params.id)
    .then(experience => {
      if (!experience) return res.status(404).json({ message: 'Review not found' })
      const review = experience.reviews.id(req.params.reviewId)
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
  reviewUpdate,
  reviewDelete
}