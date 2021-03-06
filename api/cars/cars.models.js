'user strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var carSchema = Schema({
  descripction: {
    type: String,
    required:[true, 'required']
  },
  make: {
    type: String,
    required: [true, 'required']
  },
  models: {
    type: String,
    required: [true, 'required']
  },
  estimatedate: {
    type: String,
    required: [true, 'required']
  },
  
  km: {
    type: String
  },
  image: {
    type: String,
    required: [true, 'required']
  }
})

module.exports = mongoose.model('Cars', carSchema)
