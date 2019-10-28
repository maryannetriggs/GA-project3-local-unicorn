const Traveller = require('../models/Traveller')

const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorized1' })
  }
  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verify(token, secret, (err, payload) => { 
    if (err) return res.status(401).json({ message: 'Unauthorized2' })
    Traveller 
      .findById(payload.sub)
      .then(traveller => {
        if (!traveller) return res.status(401).json({ message: 'Unauthorized3' })
        req.currentTraveller = traveller
        next()
      })
      .catch(() => res.status(401).json({ message: 'Unauthorized4' }))
  })
}

module.exports = secureRoute
