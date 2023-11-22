const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Vendor = require('../models/vendor');
const h1 = 'All Vendors';
const desc = 'Vendor';


router.get('/', async (req, res) => {
    const vendors = await Vendor.find({}).sort( {vendorName: 1 })
    // console.log(vendors)
    res.render('vendorView', { vendors, h1, desc })
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const vendor = await Vendor.findById(id);
    res.render('vendorView', { vendor })
})


module.exports = router;