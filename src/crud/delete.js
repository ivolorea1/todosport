require('../connection')

const Product = require('../models/Product.js')



const someFunction = async () => {
    // const result = await Product.deleteMany({name: 'pepinio'})
    // const result = await Product.findOneAndDelete({name:'pepinio'})
    // const result = await Product.findByIdAndDelete()
    const result = await Product.deleteOne({name: 'pepinio'})
    console.log(result);
}
someFunction()