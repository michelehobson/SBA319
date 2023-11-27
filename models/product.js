const mongoose = require('mongoose');
// const Vendor = require('./vendor');
// const Category = require('./category');
const PurchaseOrder = require('./purchaseOrders');

// DEFINE SCHEMA
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        unique: true,
        required: true,
        prodPO: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PurchaseOrder'}]
    },
    uom: {
        type: String,
        required: true,
        lowercase: true,
        prodUOM: [ { type: mongoose.Schema.Types.ObjectId, ref: 'UOM'}]
    },
    category: {
        type: String,
        required: true,
        index: true,
        prodCat: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
        prodVend: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'}]
    },
    price: {
        type: String
        
    }
})
productSchema.pre('validate', async function(next) {
    const name = this.productName;
    console.log('NAME: ' + name)
    const po = await PurchaseOrder
    .findOne( { productName: name})
    .populate( { 
        path: 'productName.prodPO',
        select: 'productName productQty uom uomCost'
    })
    .exec();
    console.log(po);
    if(po.productName === undefined) {
        console.log('Not Found')
        return 'Not Found'
    } else {
        console.log('FOUND!!!!!!!!!!! ' + po.uomCost);
        let costPerFiftyPounds = po.uomCost / 50;
        let ouncesToPounds = po.uomCost * 16;
        let threePoundBags = po.uomCost / 3;
        let fivePoundBags = po.uomCost / 5;
        let timesTwelve = po.uomCost * 12;
        let timesTwentyFour = po.uomCost * 24;
        if(this.uom === po.uom) {
            return this.price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2));
        } else {
            switch (this.uom) {
                case 'lb':
                    switch (po.uom) {
                        case 'lb':
                            return this.price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2));
                        case 'bushel':
                            return this.price = (Math.round(costPerFiftyPounds += costPerFiftyPounds * .2).toFixed(2));
                        case 'case':
                            return this.price = (Math.round(costPerFiftyPounds += costPerFiftyPounds * .2).toFixed(2));
                        default:
                            return false;
                        }
                case 'bushel':
                    switch (po.uom) {
                        case 'lb':
                            return this.price = (Math.round(costPerFiftyPounds += costPerFiftyPounds * .2).toFixed(2));
                        case 'bushel':
                            return this.price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2));
                        default:
                            return false;
                        }
                case 'case':
                    switch (po.uom) {
                        case 'lb':
                            return this.price = (Math.round(costPerFiftyPounds += costPerFiftyPounds * .2).toFixed(2));
                        case 'each':
                            return this.price = (Math.round(timesTwentyFour += timesTwentyFour * .2).toFixed(2));
                        case 'bag':
                            return this.price = (Math.round(timesTwelve += timesTwelve * .2).toFixed(2));
                        case 'gallon':
                            return this.price = (Math.round(timesTwelve += timesTwelve * .2).toFixed(2));
                        case 'half gallon':
                            return this.price = (Math.round(timesTwentyFour += timesTwentyFour * .2).toFixed(2));
                        case 'ounce':
                            return this.price = (Math.round(ouncesToPounds += ouncesToPounds * .25).toFixed(2));
                        case 'quart':
                            return this.price = (Math.round(timesTwentyFour += timesTwentyFour * .2).toFixed(2));
                        default:
                            return false;
                        }
                case 'bag':
                    switch (po.uom) {
                        case 'bag':
                            return this.price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2));
                        default:
                            return false;
                        }
                case 'gallon':
                    switch (po.uom) {
                        case 'gallon':
                            return this.price = (Math.round(timesTwelve += timesTwelve * .2).toFixed(2));
                        default:
                            return false;
                        }                
                case 'half gallon':
                    switch (po.uom) {
                        case 'half gallon':
                            return this.price = (Math.round(timesTwentyFour += timesTwentyFour * .2).toFixed(2));
                        default:
                            return false;
                        }
                case 'ounce':
                    switch (po.uom) {
                        case 'lb':
                            return this.price = (Math.round(costPerFiftyPounds += costPerFiftyPounds * .2).toFixed(2));
                        case 'ounce':
                            return this.price = (Math.round(ouncesToPounds += ouncesToPounds * .25).toFixed(2));
                        default:
                            return false;
                        }                
                case 'quart':
                    switch (po.uom) {
                        case 'quart':
                            return this.price = (Math.round(timesTwentyFour += timesTwentyFour * .2).toFixed(2));
                        default:
                            return false;
                        }
                case 'each':
                    switch (po.uom) {
                        case 'each':
                            return this.price = (Math.round(timesTwentyFour += timesTwentyFour * .2).toFixed(2));
                        default:
                            return false;
                        }
                default:
                    return 'No UOM'
            }
        }
    }

    next();

})    

productSchema.pre('save', true, async function(next) {
    console.log('Jesus')
    next();
})

// DEFINE MODEL
const Product = mongoose.model('Product', productSchema);
// Vendor.find().then(v => console.log(v)).catch(error => console.log(error))

module.exports = Product;