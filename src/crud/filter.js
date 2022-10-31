require('../connection.js')
const Product = require('../models/Product')

const filterProducts = async () => {
    const product = await Product.find({name: 'el papu2'})
    console.log(product);
}

filterProducts();