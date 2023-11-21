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
    // const { id } = req.params;
    res.render('template', { products, h1, desc })
})

module.exports = router;