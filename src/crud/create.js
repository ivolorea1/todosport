require('../connection')

const Product = require('../models/Product')

const createProduct = async () => {
    const product1 = new Product({
        name: 'el papu2',
        price: 12321,
        img: 'asdasda.jpg'
    })
    await product1.save();
    const product2 = new Product({
        name: 'el papu2',
        price: 12321,
        img: 'asdasda.jpg'
    })
    await product2.save();
    const product3 = new Product({
        name: 'el papu2',
        price: 12321,
        img: 'asdasda.jpg'
    })
    await product3.save();
}

createProduct()


