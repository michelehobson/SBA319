const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Category = require('../models/category');

router.get('/', async (req, res) => {
    const categories = await Category.find({}).sort( {categoryName: 1 });
    // console.log(categories)
    res.render('categoryView', { categories });
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.render('categoryView', { category });
})


module.exports = router;