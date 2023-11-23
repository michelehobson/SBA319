const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Category = require('../models/category');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(methodOverride('_method'));

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
    // console.log('***: ' + newCategory.categoryName);
    res.send(newCategory)
    await newCategory.save();
    const categories = await Category.find({}).sort({categoryName: 1});
    res.render('categoryView', {categories});
})

router.get('/:id/editCat', async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id)
    const h1 = `Edit ${category.categoryName}`
    res.render('editCat', {category, h1})
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    const categories = await Category.find({}).sort({categoryName: 1});
    res.render('categoryView', {categories});
})

router.get('/:id/delCat', async (req, res) => {
    const { id } = req.params;
    const category = await Category.findById(id)
    const h1 = `Delete ${category.categoryName}`
    res.render('delCat', {category, h1})
})

router.delete('/:id', async (req, res) => {
    res.send('JESUS IS THE BEST THING')
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id, req.body, {runValidators: true, new: true})
    const categories = await Category.find({}).sort({categoryName: 1});
    res.render('categoryView', {categories});
})

module.exports = router;