const mongoose = require('mongoose');
const Category = require('./category')

// DEFINE SCHEMA
const vendorSchema = new mongoose.Schema({
    vendorName: String,
    address: String,
    city: String,
    state: {
        type: String,
        min: 2,
        max: 2,
        enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
            'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
            'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
            'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
    },
    zip: {
        type: String,
        min: 5,
        max: 5
    },
    category: {
        type: String,
        index: true,
        vendCat: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]
    },
    vpName: String,
    vpQty: Number,
    uom: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['per lb', 'each', 'bag', 'gallon', '.5 gallon', 'case', 'bushel'],
    },
    uomCost: Number
})

const Vendor = new mongoose.model('Vendor', vendorSchema);
// Category.find().then(c => console.log(c)).catch(error => console.log(error));
module.exports = Vendor;