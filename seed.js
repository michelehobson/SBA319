// Open node
// .load seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDb = async () => {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection
        .on('open', () => console.log('CONNECTED TO MongoDb!!!'))
        .on('close', () => console.log('MongoDb CONNECTION CLOSED!!!'))
        .on('error', (error) => console.log(error))
}
connectDb();

const UOM = require('./models/uom');
const uoms = [
    {uom: 'lb'},
    {uom: 'each'},
    {uom: 'bag'},
    {uom: 'ounce'},
    {uom: 'quart'},
    {uom: 'gallon'},
    {uom: 'half gallon'},
    {uom: 'case'},
    {uom: 'bushel'}
]
UOM.insertMany(uoms)
.then(response => {
    console.log(response)
})
.catch(e => {
    console.log(e);
})


const Category = require('./models/category');
const category = [
    {categoryName: 'Confectionary'},
    {categoryName: 'Dairy'},
    {categoryName: 'Fruit'},
    {categoryName: 'Grocery'},
    {categoryName: 'Grain'},
    {categoryName: 'Herbs'},
    {categoryName: 'Protein'},
    {categoryName: 'Vegetable'}
]
Category.insertMany(category)
.then(response => {
    console.log(response)
})
.catch(e => {
    console.log(e);
})

// ALL BUSHELS AND CASES OF FRUITS AND VEGEES WEIGH 50LBS
const Vendor = require('./models/vendor');
const vendors = [
    {vendorNumber: '10001', vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: '33468', phone: 8009875648, fax: 7567894515},
    {vendorNumber: '10002', vendorName: 'Dairy Vendor',  address: '234 Dairy Street', city: 'Madison', state: 'WI', zip: '53562', phone: 8009875648, fax: 7567894515},
    {vendorNumber: '10003', vendorName: 'Vegetable Vendor',  address: '345 Vegetable Boulevard', city: 'Valdosta', state: 'GA', zip: '31605', phone: 8009875648, fax: 7567894515},
    {vendorNumber: '10004', vendorName: 'Grocery Vendor',  address: '456 Grocery Avenue', city: 'Brooklyn', state: 'NY', zip: '11238', phone: 8009875648, fax: 7567894515},
    {vendorNumber: '10005', vendorName: 'Protein Vendor',  address: '567 Main Street', city: 'Smithfield', state: 'VA', zip: '23430', phone: 8009875648, fax: 7567894515},
    {vendorNumber: '10006', vendorName: 'Herb Vendor',  address: '678 Herb Way', city: 'Atlanta', state: 'GA', zip: '30030', phone: 8009875648, fax: 7567894515}
]
Vendor.insertMany(vendors)
.then(response => {
    console.log(response)
})
.catch(e => {
    console.log(e);
})

const PurchaseOrder = require('./models/purchaseOrders');
const purchaseOrders = [
    {vendorNumber: '10001', productName: 'Honey Crisp Apples', uomCost: 64.50, productQty: 1, uom: 'bushel', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Braeburn Apples', uomCost: 39.50, productQty: 1, uom: 'bushel', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Roma Tomatoes', uomCost: 39.50, productQty: 1, uom: 'case', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Beefsteak Tomatoes', uomCost: 49.5, productQty: 1, uom: 'case', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Bananas', uomCost: 17, productQty: 1, uom: 'case', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Peaches', uomCost: 94.50, productQty: 1, uom: 'case', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Pears', uomCost: 2.99, productQty: 10, uom: 'bag', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Blueberries', uomCost: 1.39, productQty: 20, uom: 'each', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Strawberries', uomCost: 2.50, productQty: 20, uom: 'each', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'English Cucumbers', uomCost: .59, productQty: 30, uom: 'each', category: 'Fruit'},
    {vendorNumber: '10001', productName: 'Ruby Red GrapeFruit', uomCost: .99, productQty: 10, uom: 'each', category: 'Fruit'},
    {vendorNumber: '10002', productName: 'Whole Milk', uomCost: 2.23, productQty: 10, uom: 'gallon', category: 'Dairy'},
    {vendorNumber: '10002', productName: 'Strawberry Greek Yogurt', uomCost: .79, productQty: 10, uom: 'each', category: 'Dairy'},
    {vendorNumber: '10002', productName: 'Blueberry Greek Yogurt', uomCost: .79, productQty: 10, uom: 'each', category: 'Dairy'},
    {vendorNumber: '10002', productName: 'Peach Greek Yogurt', uomCost: .79, productQty: 10, uom: 'each', category: 'Dairy'},
    {vendorNumber: '10003', productName: 'Cabbage', uomCost: .59, productQty: 50, uom: 'lb', category: 'Vegetable'},
    {vendorNumber: '10003', productName: 'Okra', uomCost: 1.99, productQty: 25, uom: 'lb', category: 'Vegetable'},
    {vendorNumber: '10003', productName: 'Brussel Sprouts', uomCost: 1.39, productQty: 25, uom: 'bag', category: 'Vegetable'},
    {vendorNumber: '10003', productName: 'Broccoli', uomCost: .89, productQty: 50, uom: 'bag', category: 'Vegetable'},
    {vendorNumber: '10003', productName: 'Romaine Lettuce', uomCost: .89, productQty: 25, uom: 'bag', category: 'Vegetable'},
    {vendorNumber: '10004', productName: 'Himalayin Sea Salt', uomCost: 1.25, productQty: 25, uom: 'each', category: 'Grocery'},
    {vendorNumber: '10004', productName: 'Sugar', uomCost: .89, productQty: 75, uom: 'lb', category: 'Grocery'},
    {vendorNumber: '10004', productName: 'Sesame Tahini', uomCost: 3.49, productQty: 3, uom: 'each', category: 'Grocery'},
    {vendorNumber: '10004', productName: 'Naan', uomCost: 2.99, productQty: 5, uom: 'each', category: 'Grocery'},
    {vendorNumber: '10005', productName: 'Chickpeas', uomCost: .69, productQty: 5, uom: 'bag', category: 'Protein'},
    {vendorNumber: '10005', productName: 'Ham', uomCost: 1.29, productQty: 125, uom: 'lb', category: 'Protein'},
    {vendorNumber: '10005', productName: 'Bacon', uomCost: 2.69, productQty: 40, uom: 'lb', category: 'Protein'},
    {vendorNumber: '10006', productName: 'Cilanto', uomCost: .69, productQty: 10, uom: 'each', category: 'Herb'}
]
PurchaseOrder.insertMany(purchaseOrders)
.then(response => {
    console.log(response)
})
.catch(e => {
    console.log(e);
})

const Product = require('./models/product');
const products = [
    {productName: 'Honey Crisp Apples', price: 0, uom: 'lb', category: 'Fruit'},
    {productName: 'Braeburn Apples', price: 0, uom: 'lb', category: 'Fruit'},
    {productName: 'Roma Tomatoes', price: 0, uom: 'lb', category: 'Fruit'},
    {productName: 'Beefsteak Tomatoes', price: 0, uom: 'lb', category: 'Fruit'},
    {productName: 'Bananas', price: .54, uom: 'lb', category: 'Fruit'},
    {productName: 'Peaches', price: 1.49, uom: 'lb', category: 'Fruit'},
    {productName: 'Pears', price: 2.99, uom: 'bag', category: 'Fruit'},
    {productName: 'Blueberries', price: 1.39, uom: 'each', category: 'Fruit'},
    {productName: 'Strawberries', price: 2.50, uom: 'each', category: 'Fruit'},
    {productName: 'Whole Milk', price: 2.23, uom: 'gallon', category: 'Dairy'},
    {productName: 'Cabbage', price: .59, uom: 'lb', category: 'Vegetable'},
    {productName: 'Okra', price: 1.99, uom: 'lb', category: 'Vegetable'},
    {productName: 'Brussel Sprouts', price: 1.39, uom: 'bag', category: 'Vegetable'},
    {productName: 'Broccoli', price: .89, uom: 'bag', category: 'Vegetable'},
    {productName: 'Romaine Lettuce', price: 3.49, uom: 'each', category: 'Vegetable'},
    {productName: 'English Cucumbers', price: .89, uom: 'each', category: 'Fruit'},
    {productName: 'Ruby Red GrapeFruit', price: 1.39, uom: 'each', category: 'Fruit'},
    {productName: 'Himalayin Sea Salt', price: 1.25, uom: 'each', category: 'Grocery'},
    {productName: 'Sugar', price: .89, uom: 'lb', category: 'Grocery'},
    {productName: 'Sesame Tahini', price: 4.99, uom: 'each', category: 'Grocery'},
    {productName: 'Chickpeas', price: .69, uom: 'bag', category: 'Protein'},
    {productName: 'Ham', price: 2.69, uom: 'bag', category: 'Protein'},
    {productName: 'Bacon', price: 4.69, uom: 'bag', category: 'Protein'},
    {productName: 'Cilanto', price: .89, uom: 'each', category: 'Herb'},
    {productName: 'Naan', price: 3.99, uom: 'each', category: 'Grocery'},
    {productName: 'Strawberry Greek Yogurt', price: .99, uom: 'each', category: 'Dairy'},
    {productName: 'Peach Greek Yogurt', price: .99, uom: 'each', category: 'Dairy'},
    {productName: 'Blueberry Greek Yogurt', price: .99, uom: 'each', category: 'Dairy'}
]
Product.insertMany(products)
.then(response => {
    console.log(response);
})
.catch(e => {
    console.log(e);
})

// mongoose.disconnect();