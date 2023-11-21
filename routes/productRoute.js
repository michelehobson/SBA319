const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Product = require('../models/product')
const h1 = 'All Products';
const desc = 'Product';


router.get('/', async (req, res) => {
    const products = await Product.find({})
    res.render('productView', { products, h1, desc })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('detailsView', { product })
})


module.exports = router;