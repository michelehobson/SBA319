const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Product = require('../models/product');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(methodOverride('_method'));

const h1 = 'All Products';
const desc = 'Product';

router.get('/', async (req, res) => {
    const products = await Product.find({}).sort( {category: 1, productName: 1 })
    res.render('allProductsView', { products, h1, desc })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('productView', { product })
})

router.get('/prod', async (req, res) => {
    const h1 = 'Add Product'
    res.render('prod', {h1})
})

router.post('/', async (req, res) => {
    let newProd = (req.body);
    let newProduct = new Product(newProd)
    await newProduct.save();
    const products = await Product.find({}).sort({productName: 1});
    res.render('allProductsView', {products});
})

router.get('/:id/editProd', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    const h1 = `Edit ${product.productName}`
    res.render('editProd', {product, h1})
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    const products = await Product.find({}).sort({productName: 1});
    res.render('allProductsView', {products});
})

router.get('/:id/delProd', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    const h1 = `Delete ${product.productName}`
    res.render('delProd', {product, h1})
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body, {runValidators: true, new: true})
    const products = await Product.find({}).sort({productName: 1});
    res.render('allProductsView', {products});
})

module.exports = router;