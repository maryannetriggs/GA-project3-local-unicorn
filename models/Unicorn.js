const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const unicornSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePicture: { type: String, required: true },
  about: { type: String, required: true, maxlength: 300 },
  city: { type: mongoose.Schema.ObjectId, ref: 'City', required: true },
  country: { type: String  },
  region: { type: String, enum: ['Africa', 'Asia', 'Caribbean', 'Central America', 'Europe', 'North America', 'Oceania', 'South America'] },
  language: { type: [String], required: true },
  age: { type: Number, min: 18, max: 100 },
  gender: { type: String, enum: ['Male', 'Female', 'Non-binary'], required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

unicornSchema.virtual('experiences', {
  ref: 'Exp',
  localField: '_id',
  foreignField: 'unicorn'
})

unicornSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    delete json.email
    return json
  }
})

unicornSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

unicornSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

unicornSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

unicornSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

unicornSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Unicorn', unicornSchema)

