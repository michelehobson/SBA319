const mongoose = require('mongoose');

// DEFINE SCHEMA
const poSchema = new mongoose.Schema({
    vendorNumber: {
        type: Number,
        required: true
    },
    poDate: Date,
    productName: {
        type: String,
        required: true,
        poProd: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
    },
    productQty: {
        type: Number,
        required: true
    },
    uom: {
        type: String,
        required: true,
        poUOM: [ { type: mongoose.Schema.Types.ObjectId, ref: 'UOM'}]
    },
    uomCost: Number
})

const PurchaseOrder = new mongoose.model('PurchaseOrder', poSchema);
module.exports = PurchaseOrder;