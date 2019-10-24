function logger(req, res, next) {
  console.log((`${req.method} to ${req.url}`))
  next()
}

module.export = logger