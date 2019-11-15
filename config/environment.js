// const env = process.env.NODE_ENV || 'dev'
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/unicorns${process.env.NODE_ENV || 'dev'}`
const secret = process.env.SECRET || 'none of your business'

module.exports = {
  port,
  dbURI,
  secret
}