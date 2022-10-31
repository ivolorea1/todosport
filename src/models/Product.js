
const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number,
    default: 0
  },
  img: {
    type: String
  }
})

module.exports = model('product', productSchema);