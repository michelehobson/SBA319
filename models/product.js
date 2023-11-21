const mongoose = require('mongoose');
const Vendor = require('./vendor');

// DEFINE SCHEMA
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    uom: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['per lb', 'each', 'bag', 'gallon', '.5 gallon', 'case', 'bushel']
    },
    category: {
        type: String,
        required: true,
        index: true,
        // prodCat: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
        prodCat: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'}]
    },

})

// DEFINE MODEL
const Product = mongoose.model('Product', productSchema);

Vendor.find()
.then(p => console.log(p)).catch(error => console.log(error))
module.exports = Product;