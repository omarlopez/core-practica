var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cars = require('./cars/index')

const PORT = 8383
const HOST = '0.0.0.0'

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE')
  if (req.method === 'OPTIONS') return res.send(200)
  next()
})


mongoose.connect('mongodb://db:27017/db1')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use('/api/v1', cars)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
