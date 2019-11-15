const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./config/router')
const { dbURI, port } = require('./config/environment')
const logger = require('./lib/logger')
const errorHandler = require('./lib/errorHandler')

mongoose.connect(dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('mongo is connected')
)
app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use(logger)

app.use('/api', router)

app.use('/*', (req, res) => res.status(404).json({ message: 'not found' }))

app.use(errorHandler)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(port, () => console.log(`Up and running on ${port}`))

module.exports = app 
