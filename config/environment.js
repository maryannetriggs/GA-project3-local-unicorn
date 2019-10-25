const env = process.env.NODE_ENV || 'dev'
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/unicorns-${env}`
const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'none of your business'

module.exports = {
  dbURI,
  port,
  secret
}