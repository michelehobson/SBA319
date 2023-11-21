const mongoose = require('mongoose');

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
        enum: ['Fruit', 'Vegetable', 'Dairy', 'Grocery', 'Grain', 'Protein', 'Candy', 'Herb']
    }
})

// DEFINE MODEL
const Product = mongoose.model('Product', productSchema);
module.exports = Product;