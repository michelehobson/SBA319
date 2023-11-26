const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { JSDOM } = require('jsdom');

const Category = require('../models/category');
const Vendor = require('../models/vendor');
const Product = require('../models/product');

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
    const { id } = req.params;
    console.log(req.params)
    const cat = await Category.findById(id)
    const name = cat.categoryName;
    console.log('CATEGORY: ' + name)

    // POPULATE LOGIC
    const category = await Category.
    findOne({ categoryName: name}).
    populate({
        path:'categoryName.catProd',
        select: '_id category productName'
    })
    .exec();
        console.log(category)

    const products = await Product
    .find({ category: name })
    .populate({
        path:'category.prodCat',
        select: '_id category productName'
    })
    .exec();
        console.log(products)
    if(products === null) { 
        const category = await Category.findByIdAndDelete(id, req.body, {runValidators: true, new: true})
        const categories = await Category.find({}).sort({categoryName: 1});
        res.render('categoryView', {categories});
    } else {
        const h1 = `Failed to Delete Record`
        // const para = `${name} is bound to the following products and cannot be deleted.`
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
        const para = dom.window.document.createElement('p');
        // const div = dom.window.document.getElementById('appendTo');
        para.textContent = `${name} is bound to the following products and cannot be deleted.`
        para.classList.add('failure1')
        dom.window.document.dispatchEvent.append//.appendChild(para);
        // const class1 = failure1;
        // const class2 = failure2;
        res.render('displayMessage', { h1, para, name, products })
    }
})

module.exports = router;