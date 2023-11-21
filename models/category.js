const mongoose = require('mongoose');

// DEFINE SCHEMA
const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        index: true,
    }
})

// DEFINE MODEL
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;