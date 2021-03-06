'use strict'

const { param } = require('.')
const Cars = require('./cars.models')

module.exports = {
    getAllUser: function(req, res){
      Cars.find({})
      .exec((err, cars) => {
        res.status(200).send({
          status: 200,
          message: cars
        })
      })
    },

    addUser: function(req, res) {
        let params = req.body
        console.log('#### body ###', params)
        let car = new Cars()

        car.descripction = params.descripction
        car.make = params.make
        car.models = params.models
        car.estimatedate = params.estimatedate
        car.km = params.km
        car.image = params.image


        car.save((err, carSave) => {
          if (err) {
            res.status(400).send({
              status: 400,
              message: 'Error create user'
            })
          }

          res.status(200).send({
            status: 200,
            message: 'car created',
            userSave: carSave
          })
        })
    }
}
