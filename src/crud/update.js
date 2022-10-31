require('../connection')

const Product = require('../models/Product.js')

const updateProduct = async () => {
    const product = await Product.updateOne({name: 'pepe2'},{
        name: 'pepinio'
    });
    console.log(product)
    // para cambiar varios usar 'updateMany'

}
updateProduct()
