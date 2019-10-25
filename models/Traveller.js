const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const travellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePicture: { type: String, required: true },
  about: { type: String, required: true, maxlength: 300 },
  country: { type: String, required: true },
  experiences: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }

}, {
  timestamps: true
})

travellerSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    delete json.email
    return json
  }
})

travellerSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

travellerSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

travellerSchema
  .pre('save',  function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

travellerSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

travellerSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Traveler', travellerSchema)


