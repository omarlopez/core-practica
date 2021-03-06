'use strict'

var express = require('express')
var carsController = require('./cars.controller')

var router = express.Router()

// user
router.get('/cars', carsController.getAllUser)

// save user
router.post('/car', carsController.addUser)
router.post('/car/:id', carsController.addUser)


module.exports = router
