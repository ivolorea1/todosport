require('../connection.js')
const Product = require('../models/Product')

const getProduct = async () => {
    const product = await Product.findOne({name: 'el papu2'})
    module.exports.product = product;
}

getProduct();
