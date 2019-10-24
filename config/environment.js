const dbURI = process.env.MONGODB_URI || 'mondodb://localhost/unicorns'
const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'none of your business'

module.exports = {
  dbURI,
  port,
  secret
}