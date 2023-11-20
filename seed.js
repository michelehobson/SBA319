const Product = require('./models/product');
const mongoose = require('mongoose');

const products = [
    {name: 'Apples', price: .99, uom: 'lb', category: 'fruit'},
    {name: 'Tomatoes', price: .99, uom: 'lb', category: 'fruit'},
    {name: 'Bananas', price: .54, uom: 'lb', category: 'fruit'},
    {name: 'Peaches', price: 1.49, uom: 'lb', category: 'fruit'},
    {name: 'Pears', price: 2.99, uom: 'bag', category: 'fruit'},
    {name: 'Blueberries', price: 1.39, uom: 'each', category: 'fruit'},
    {name: 'Strawberries', price: 2.50, uom: 'each', category: 'fruit'},
    {name: '1% Milk', price: 2.23, uom: 'gallon', category: 'dairy'},
    {name: 'Cabbage', price: .59, uom: 'lb', category: 'vegetable'},
    {name: 'Okra', price: 1.99, uom: 'lb', category: 'vegetable'},
    {name: 'Brussel Sprouts', price: 1.39, uom: 'bag', category: 'vegetable'},
    {name: 'Broccoli', price: .89, uom: 'bag', category: 'vegetable'},
    {name: 'Romaine Lettuce', price: 3.49, uom: 'bag', category: 'vegetable'},
    {name: 'English Cucumbers', price: .89, uom: 'each', category: 'fruit'},
    {name: 'Ruby Red Grapefruit', price: 1.39, uom: 'each', category: 'fruit'},
    {name: 'Himalayin Sea Salt', price: 1.25, uom: 'each', category: 'staple'},
    {name: 'Sugar', price: .89, uom: 'lb', category: 'staple'},
    {name: 'Sesame Tahini', price: 4.99, uom: 'each', category: 'staple'},
    {name: 'Chickpeas', price: .69, uom: 'each', category: 'bean'},
    {name: 'Cilanto', price: .89, uom: 'each', category: 'vegetable'},
    {name: 'Naan', price: 3.99, uom: 'each', category: 'staple'},
    {name: 'Greek Yogurt', price: .99, uom: 'each', category: 'staple'}
]

Product.insertMany(products)
.then(response => {
    console.log(response)
    
})
.catch(e => {
    console.log(e)
})

