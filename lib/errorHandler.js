function errorHandler(err, req, res, next) {
  console.log(err.name)
  if (err.name === 'ValidationError') {
    const errors = {}

    for (const key in err.errors) {
      errors[key] = 'This field is required'
    }
    err.errors = errors
    return res.status(422).json({ message: 'Unprocessable entity', errors })
  }
  res.sendStatus(500)
  next(err)
}

module.exports = errorHandler