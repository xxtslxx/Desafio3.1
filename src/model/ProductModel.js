//const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    _id: String

})

const product = mongoose.model('ProductModel',DataSchema)
module.exports = product