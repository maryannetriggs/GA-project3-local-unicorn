const Traveller = require('../models/Traveller')
// const Unicorn = require('../models/Unicorn')

const { secret } = require('../config/environment')
const jwt = require('jsonwebtoken')

function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Unauthorised' })
  }
  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verify(token, secret, (err, payload) => { 
    if (err) return res.status(401).json({ message: 'Unauthorised' })
    Traveller 
      .findById(payload.sub)
      .then(traveller => {
        if (!traveller) return res.status(401).json({ message: 'Unauthorised' })
        req.currentUser = traveller
        next()
      })
      .catch(() => res.status(401).json({ message: 'Unauthorised' }))
  })

  // jwt.verify(token, secret, (err, payload) => { 
  //   if (err) return res.status(401).json({ message: 'Unauthorised' })
  //   Unicorn 
  //     .findById(payload.sub)
  //     .then(unicorn => {
  //       if (!unicorn) return res.status(401).json({ message: 'Unauthorised' })
  //       req.currentUser = unicorn
  //       next()
  //     })
  //     .catch(() => res.status(401).json({ message: 'Unauthorised' }))
  // })

}

module.exports = secureRoute
