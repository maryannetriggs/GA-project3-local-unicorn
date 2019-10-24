const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 300 },
  country: { type: String, required: true },
  region: { type: String, required: true, enum: ['Africa', 'Asia', 'Caribbean', 'Central America', 'Europe', 'North America', 'Oceania', 'South America'] }
}, {
  timestamps: true
})

module.exports = mongoose.model('City', citySchema)