const mongoose = require('mongoose')
const Traveller = require('../models/Traveller')

const reviewSchema = new mongoose.Schema({
  experienceName: { type: String, required: true },
  text: { type: String, required: true },
  score: { type: Number, min: 0, max: 5, required: true },
  traveller: { type: mongoose.Schema.ObjectId, ref: Traveller, required: true }
}, {
  timestamps: true
})

const expSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  category: { type: [String], required: true, enum: ['Sport', 'Food', 'Drink', 'Culture', 'Outdoors', 'Music', 'Social'] },
  intensity: { type: String, enum: ['High', 'Medium', 'Low'] },
  price: { type: Number, required: true },
  unicorn: { type: mongoose.Schema.ObjectId, ref: 'Unicorn', required: true },
  availability: { type: [String], required: true, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
  time: { type: [String], required: true, enum: ['Morning', 'Afternoon', 'Evening', 'All-Day'] },
  reviews: [ reviewSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Exp', expSchema)