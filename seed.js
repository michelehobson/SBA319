// 
// Open node
// .load seed.js
const Product = require('./models/product');
const mongoose = require('mongoose');

const products = [
    {name: 'Apples', price: .99, uom: 'lb', category: 'Fruit'},
    {name: 'Tomatoes', price: .99, uom: 'lb', category: 'Fruit'},
    {name: 'Bananas', price: .54, uom: 'lb', category: 'Fruit'},
    {name: 'Peaches', price: 1.49, uom: 'lb', category: 'Fruit'},
    {name: 'Pears', price: 2.99, uom: 'bag', category: 'Fruit'},
    {name: 'Blueberries', price: 1.39, uom: 'each', category: 'Fruit'},
    {name: 'Strawberries', price: 2.50, uom: 'each', category: 'Fruit'},
    {name: '1% Milk', price: 2.23, uom: 'gallon', category: 'Dairy'},
    {name: 'Cabbage', price: .59, uom: 'lb', category: 'Vegetable'},
    {name: 'Okra', price: 1.99, uom: 'lb', category: 'Vegetable'},
    {name: 'Brussel Sprouts', price: 1.39, uom: 'bag', category: 'Vegetable'},
    {name: 'Broccoli', price: .89, uom: 'bag', category: 'Vegetable'},
    {name: 'Romaine Lettuce', price: 3.49, uom: 'bag', category: 'Vegetable'},
    {name: 'English Cucumbers', price: .89, uom: 'each', category: 'Fruit'},
    {name: 'Ruby Red GrapeFruit', price: 1.39, uom: 'each', category: 'Fruit'},
    {name: 'Himalayin Sea Salt', price: 1.25, uom: 'each', category: 'Grocery'},
    {name: 'Sugar', price: .89, uom: 'lb', category: 'Grocery'},
    {name: 'Sesame Tahini', price: 4.99, uom: 'each', category: 'Grocery'},
    {name: 'Chickpeas', price: .69, uom: 'each', category: 'Protein'},
    {name: 'Cilanto', price: .89, uom: 'each', category: 'Herb'},
    {name: 'Naan', price: 3.99, uom: 'each', category: 'Grocery'},
    {name: 'Greek Yogurt', price: .99, uom: 'each', category: 'Grocery'}
]

Product.insertMany(products)
.then(response => {
    console.log(response)
})
.catch(e => {
    console.log(e)
})

