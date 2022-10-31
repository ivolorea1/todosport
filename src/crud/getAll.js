require ('../connection');
const Product = require('../models/Product');

async function getAll() {
    const products = await Product.find()
    return products
}
module.exports = getAll()




//trae todos los datos de la bd 