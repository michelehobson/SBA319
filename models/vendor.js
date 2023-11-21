const mongoose = require('mongoose');

// DEFINE SCHEMA
const vendorSchema = new mongoose.Schema({
    vendorName: String,
    location: {
        address: String,
        city: String,
        state: {
            enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN',
                'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH',
                'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
                'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
        },
        zip: {
            type: Number,
            min: 5,
            max: 5
        }
    },
    category: {
        type: String,
        index: true,
        enum: ['Fruit', 'Vegetable', 'Dairy', 'Grocery', 'Grain', 'Protein', 'Candy', 'Herb']
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
module.exports = Vendor;