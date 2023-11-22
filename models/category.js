const mongoose = require('mongoose');
const Product = require('./product');

// DEFINE SCHEMA
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        index: true,
        unique: true,
        catVend: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'}],
        catProd: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
    }
})

// DEFINE MODEL
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;