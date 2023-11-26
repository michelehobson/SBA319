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
    console.log('JESUS');
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
    const price = 0;
    const dividend = 0;
    const multiplier = 0;
    if(po === null) {
        console.log('Not Found')
        return 'Not Found'
    } else {
        // console.log('FOUND!!!!!!!!!!! ' + Object(po.uomCost).value)
        console.log('FOUND!!!!!!!!!!! ' + po.uomCost);
        switch (this.uom) {
            case 'lb':
                console.log('PRICE: ' + (Math.round(po.uomCost += po.uomCost * .2).toFixed(2)))
                return this.price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            case 'lb':
                price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
                break;
            default:
                return 'No UOM'

        }
    }

    next();

})    

productSchema.pre('save', true, async function(next) {
    console.log('Jesus')
    next();
    // const name = this.productName;
    // console.log('NAME: ' + name)
    // const po = await PurchaseOrder
    // .find( { productName: name})
    // .populate( { 
    //     path: 'productName.prodPO',
    //     select: 'productName productQty uom uomCost'
    // })
    // .exec();
    // console.log(po);
    // const price = 0;
    // const dividend = 0;
    // const multiplier = 0;
    // if(po === null) {
    //     console.log('Not Found')
    //     return 'Not Found'
    // } else {
    //     console.log('FOUND!!!!!!!!!!! ' + po.uomCost)
    //     switch (productSchema.uom) {
    //         case 'lb':
    //             productSchema.price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             next();
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         case 'lb':
    //             price = (Math.round(po.uomCost += po.uomCost * .2).toFixed(2))
    //             break;
    //         default:
    //             return 'No UOM'

    //     }
    // }

    // return productSchema.price
})

// DEFINE MODEL
const Product = mongoose.model('Product', productSchema);
// Vendor.find().then(v => console.log(v)).catch(error => console.log(error))

module.exports = Product;