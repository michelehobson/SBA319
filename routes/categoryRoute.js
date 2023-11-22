const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const Category = require('../models/category');

router.get('/', async (req, res) => {
    const categories = await Category.find({}).sort( {categoryName: 1 });
    // console.log(categories)
    res.render('categoryView', { categories });
})

router.get('/newCat', async (req, res) => {
    res.render('newCat')
})

router.post('/categories', (req, res) => {
    console.log(req.body)
    res.send('making your cat')
})
// router.get('/newCat', async (req, res) => {
//     const categories = await Category.find({})
//     console.log('HERE')
//     res.render('newCat', { categories })
// })

// router.post('/categories/newCat', async (req, res) => {
    // const catName = {
    //     query: { _id: new ObjectId(req.params.id) },
    //     name: req.body.categoryName
    // };

    // res.send({
    //     userName: "bob",
    //     desc: "recieived a POST request for user!",
    //   });
    
    // res.render('newCat', { newCatVal });
    // const newCatVal = new Category(req.body);
    // await newCatVal.save();
    // console.log(newCatVal); 
//        res.render('newCat'), {};
// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const category = await Category.findById(id);
//     res.render('categoryView', { category });
// })

// router.get('/:id/patch', async (req, res) => {
//     const { id } = req.params;
//     const category = await Category.findById(id);
//     res.render('categoryView', { category, id });
// })
// })

// router.get('/:id/delete', async (req, res) => {
//     const { id } = req.params;
//     const category = await Category.findById(id);
//     res.render('categoryView', { category, id  });
// })

module.exports = router;