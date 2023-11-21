const mongoose = require('mongoose');

// DEFINE SCHEMA
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    uom: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['per lb', 'each', 'bag', 'gallon', '.5 gallon'],
    },
    category: {
        type: String,
        required: true,
        index: true,
        enum: ['Fruits', 'Vegetables', 'Dairy', 'Grocery', 'Grains', 'Protein', 'Candy', 'Herb']
    }
})

// DEFINE MODEL
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// const mongoose = require('mongoose');

// // DEFINE SCHEMA
// const productSchema = new mongoose.Schema({
//     productName: {
//         type: String,
//         required: true,
//     },
//     cost: {
//         type: Number,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: cost += .10,
//         max: cost += .25,
//         onSale: false
//     },
//     uom: {
//         type: String,
//         required: true,
//         lowercase: true,
//         enum: ['per lb', 'each', 'bag', 'gallon', '.5 gallon'],
//     },
//     category: {
//         type: String,
//         index: true,
//         enum: ['Fruits', 'Vegetables', 'Dairy', 'Staple', 'Grains', 'Protein', 'Candy']
//     },
//     //This should be updated by vendor quantity as well as quantity sold
//     qtyOnHand: Number,

// })

// // DEFINE MODEL
// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;