const Admin = require('../models/Admin')

const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

function secureRouteAdmin(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized5' })
  }
  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verify(token, secret, (err, payload) => { 
    if (err) return res.status(401).json({ message: 'Unauthorized6' })
    Admin 
      .findById(payload.sub)
      .then(admin => {
        if (!admin) return res.status(401).json({ message: 'Unauthorized7' })
        req.currentAdmin = admin
        next()
      })
      .catch(() => res.status(401).json({ message: 'Unauthorized8' }))
  })
}

module.exports = secureRouteAdmin
