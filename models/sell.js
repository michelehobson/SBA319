const mongoose = require('mongoose');
const v = require('./vendor');

// DEFINE SCHEMA
const sellSchema = new mongoose.Schema({
    customer: Number,
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        // min: .25,
        // max: cost += .25,
        onSale: false
    },
    uom: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['per lb', 'each', 'bag', 'gallon', '.5 gallon'],
    },
    category: {
        type: String,
        index: true,
        enum: ['Fruits', 'Vegetables', 'Dairy', 'Staple', 'Grains', 'Protein', 'Candy']
    },
    qtyOnHand: Number
    //This should be updated by vendor quantity as well as quantity sold
    // qtyOnHand: Number,
})

// DEFINE MODEL
const Sell = mongoose.model('Sell', sellSchema);

module.exports = Sell;