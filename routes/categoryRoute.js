const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const Category = require('../models/category');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', async (req, res) => {
    const categories = await Category.find({}).sort({categoryName: 1});
    res.render('categoryView', {categories});
})

router.get('/cat', async (req, res) => {
    const h1 = 'Add Category'
    res.render('cat', {h1})
})

router.post('/', async (req, res) => {
    let newCat = {categoryName: req.body.categoryName};
    let newCategory = new Category(newCat)
    console.log('***: ' + newCategory.categoryName);
    res.send(newCategory)
    await newCategory.save();
    // res.json(newCategory);
    const categories = await Category.find({}).sort({categoryName: 1});
    res.render('categoryView', {categories});
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id)
    const h1 = `Edit ${category.categoryName}`
    res.render('editCat', {category, h1})
})

module.exports = router;