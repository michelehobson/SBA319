// 
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
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Honey Crisp Apples', uomCost: 64.50, vpQty: 1, uom: 'bushel', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Braeburn Apples', uomCost: 39.50, vpQty: 1, uom: 'bushel', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Roma Tomatoes', uomCost: 39.50, vpQty: 1, uom: 'case', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Beefsteak Tomatoes', uomCost: 49.5, vpQty: 1, uom: 'case', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Bananas', uomCost: 17, vpQty: 1, uom: 'case', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Peaches', uomCost: 94.50, vpQty: 1, uom: 'case', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Pears', uomCost: 2.99, vpQty: 10, uom: 'bag', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Blueberries', uomCost: 1.39, vpQty: 20, uom: 'each', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Strawberries', uomCost: 2.50, vpQty: 20, uom: 'each', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'English Cucumbers', uomCost: .59, vpQty: 30, uom: 'each', category: 'Fruit'},
    {vendorName: 'Fruit Vendor',  address: '123 Fruit Lane', city: 'Jupiter', state: 'FL', zip: 33468, vpName: 'Ruby Red GrapeFruit', uomCost: .99, vpQty: 10, uom: 'each', category: 'Fruit'},
    {vendorName: 'Dairy Vendor',  address: '234 Dairy Street', city: 'Madison', state: 'WI', zip: 53562, vpName: 'Whole Milk', uomCost: 2.23, vpQty: 10, uom: 'gallon', category: 'Dairy'},
    {vendorName: 'Dairy Vendor',  address: '234 Dairy Street', city: 'Madison', state: 'WI', zip: 53562, vpName: 'Strawberry Greek Yogurt', uomCost: .79, vpQty: 10, uom: 'each', category: 'Dairy'},
    {vendorName: 'Dairy Vendor',  address: '234 Dairy Street', city: 'Madison', state: 'WI', zip: 53562, vpName: 'Blueberry Greek Yogurt', uomCost: .79, vpQty: 10, uom: 'each', category: 'Dairy'},
    {vendorName: 'Dairy Vendor',  address: '234 Dairy Street', city: 'Madison', state: 'WI', zip: 53562, vpName: 'Peach Greek Yogurt', uomCost: .79, vpQty: 10, uom: 'each', category: 'Dairy'},
    {vendorName: 'Vegetable Vendor',  address: '345 Vegetable Boulevard', city: 'Valdosta', state: 'GA', zip: 31605, vpName: 'Cabbage', uomCost: .59, vpQty: 50, uom: 'per lb', category: 'Vegetable'},
    {vendorName: 'Vegetable Vendor',  address: '345 Vegetable Boulevard', city: 'Valdosta', state: 'GA', zip: 31605, vpName: 'Okra', uomCost: 1.99, vpQty: 25, uom: 'per lb', category: 'Vegetable'},
    {vendorName: 'Vegetable Vendor',  address: '345 Vegetable Boulevard', city: 'Valdosta', state: 'GA', zip: 31605, vpName: 'Brussel Sprouts', uomCost: 1.39, vpQty: 25, uom: 'bag', category: 'Vegetable'},
    {vendorName: 'Vegetable Vendor',  address: '345 Vegetable Boulevard', city: 'Valdosta', state: 'GA', zip: 31605, vpName: 'Broccoli', uomCost: .89, vpQty: 50, uom: 'bag', category: 'Vegetable'},
    {vendorName: 'Vegetable Vendor',  address: '345 Vegetable Boulevard', city: 'Valdosta', state: 'GA', zip: 31605, vpName: 'Romaine Lettuce', uomCost: .89, vpQty: 25, uom: 'bag', category: 'Vegetable'},
    {vendorName: 'Grocery Vendor',  address: '456 Grocery Avenue', city: 'Brooklyn', state: 'NY', zip: 11238, vpName: 'Himalayin Sea Salt', uomCost: 1.25, vpQty: 25, uom: 'each', category: 'Grocery'},
    {vendorName: 'Grocery Vendor',  address: '456 Grocery Avenue', city: 'Brooklyn', state: 'NY', zip: 11238, vpName: 'Sugar', uomCost: .89, vpQty: 75, uom: 'per lb', category: 'Grocery'},
    {vendorName: 'Grocery Vendor',  address: '456 Grocery Avenue', city: 'Brooklyn', state: 'NY', zip: 11238, vpName: 'Sesame Tahini', uomCost: 3.49, vpQty: 3, uom: 'each', category: 'Grocery'},
    {vendorName: 'Grocery Vendor',  address: '456 Grocery Avenue', city: 'Brooklyn', state: 'NY', zip: 11238, vpName: 'Naan', uomCost: 2.99, vpQty: 5, uom: 'each', category: 'Grocery'},
    {vendorName: 'Protein Vendor',  address: '567 Main Street', city: 'Smithfield', state: 'VA', zip: 23430, vpName: 'Chickpeas', uomCost: .69, vpQty: 5, uom: 'bag', category: 'Protein'},
    {vendorName: 'Protein Vendor',  address: '567 Main Street', city: 'Smithfield', state: 'VA', zip: 23430, vpName: 'Ham', uomCost: 1.29, vpQty: 125, uom: 'per lb', category: 'Protein'},
    {vendorName: 'Protein Vendor',  address: '567 Main Street', city: 'Smithfield', state: 'VA', zip: 23430, vpName: 'Bacon', uomCost: 2.69, vpQty: 40, uom: 'per lb', category: 'Protein'},
    {vendorName: 'Herb Vendor',  address: '678 Herb Way', city: 'Atlanta', state: 'GA', zip: 30030, vpName: 'Cilanto', uomCost: .69, vpQty: 10, uom: 'each', category: 'Herb'}
]
Vendor.insertMany(vendors)
.then(response => {
    console.log(response)
})
.catch(e => {
    console.log(e);
})

const Product = require('./models/product');
const products = [
    {productName: 'Honey Crisp Apples', price: 0, uom: 'per lb', category: 'Fruit'},
    {productName: 'Braeburn Apples', price: 0, uom: 'per lb', category: 'Fruit'},
    {productName: 'Roma Tomatoes', price: 0, uom: 'per lb', category: 'Fruit'},
    {productName: 'Beefsteak Tomatoes', price: 0, uom: 'per lb', category: 'Fruit'},
    {productName: 'Bananas', price: .54, uom: 'per lb', category: 'Fruit'},
    {productName: 'Peaches', price: 1.49, uom: 'per lb', category: 'Fruit'},
    {productName: 'Pears', price: 2.99, uom: 'bag', category: 'Fruit'},
    {productName: 'Blueberries', price: 1.39, uom: 'each', category: 'Fruit'},
    {productName: 'Strawberries', price: 2.50, uom: 'each', category: 'Fruit'},
    {productName: 'Whole Milk', price: 2.23, uom: 'gallon', category: 'Dairy'},
    {productName: 'Cabbage', price: .59, uom: 'per lb', category: 'Vegetable'},
    {productName: 'Okra', price: 1.99, uom: 'per lb', category: 'Vegetable'},
    {productName: 'Brussel Sprouts', price: 1.39, uom: 'bag', category: 'Vegetable'},
    {productName: 'Broccoli', price: .89, uom: 'bag', category: 'Vegetable'},
    {productName: 'Romaine Lettuce', price: 3.49, uom: 'each', category: 'Vegetable'},
    {productName: 'English Cucumbers', price: .89, uom: 'each', category: 'Fruit'},
    {productName: 'Ruby Red GrapeFruit', price: 1.39, uom: 'each', category: 'Fruit'},
    {productName: 'Himalayin Sea Salt', price: 1.25, uom: 'each', category: 'Grocery'},
    {productName: 'Sugar', price: .89, uom: 'per lb', category: 'Grocery'},
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