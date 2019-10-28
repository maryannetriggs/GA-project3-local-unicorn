const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function loginAdmin(req, res) {
  Admin
    .findOne({ email: req.body.email })
    .then(admin => {
      if (!admin || !admin.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Please check your details' })
      }
      const token = jwt.sign({ sub: admin._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ message: `Welcome back, ${admin.name}`, token })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}


module.exports = { loginAdmin }