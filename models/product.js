const mongoose = require('mongoose');
// const Vendor = require('./vendor');
// const Category = require('./category');

// DEFINE SCHEMA
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        unique: true,
        required: true
    },
    uom: {
        type: String,
        required: true,
        lowercase: true,
        prodUOM: [ { type: mongoose.Schema.Types.ObjectId, ref: 'UOM'}]
    },
    category: {
        type: String,
        required: true,
        index: true,
        prodCat: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
        prodVend: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'}]
    }
})

// DEFINE MODEL
const Product = mongoose.model('Product', productSchema);
// Vendor.find().then(v => console.log(v)).catch(error => console.log(error))
module.exports = Product;