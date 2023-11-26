const mongoose = require('mongoose');

// DEFINE SCHEMA
const uomSchema = new mongoose.Schema({
    uom: {
        type: String,
        required: true,
        unique: true,
        uomVend: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'}],
        uomProd: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
    }
})

// DEFINE MODEL
const UOM = mongoose.model('UOM', uomSchema);
module.exports = UOM;