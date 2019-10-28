const Unicorn = require('../models/Unicorn')

const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

function secureRouteUnicorn(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorised' })
  }
  const token = req.headers.authorization.replace('Bearer ', '')
  jwt.verify(token, secret, (err, payload) => { 
    if (err) return res.status(401).json({ message: 'Unauthorised' })
    Unicorn 
      .findById(payload.sub)
      .then(unicorn => {
        if (!unicorn) return res.status(401).json({ message: 'Unauthorised' })
        req.currentUnicorn = unicorn
        next()
      })
      .catch(() => res.status(401).json({ message: 'Unauthorised' }))
  })
}

module.exports = secureRouteUnicorn
