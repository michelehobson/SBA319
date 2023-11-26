const mongoose = require('mongoose');

// DEFINE SCHEMA
const vendorSchema = new mongoose.Schema({
    vendorNumber: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 10
    },
    vendorName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        unique: true,
    },
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
    phone: {
        type: String,
        min: 10,
        max: 10
    },
    fax: {
        type: String,
        min: 10,
        max: 10
    }
})

const Vendor = new mongoose.model('Vendor', vendorSchema);
// Category.find().then(c => console.log(c)).catch(error => console.log(error));
module.exports = Vendor;