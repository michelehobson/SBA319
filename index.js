const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.json());

const Product = require('./models/product');
const Sell = require('./models/sell');
const Vendor = require('./models/vendor');

const products = require('./routes/productRoute');
const sold = require('./routes/soldRoute');
const vendors = require('./routes/vendorRoute');

const connectDb = async () => {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection
        .on('open', () => console.log('CONNECTED TO MongoDb!!!'))
        .on('close', () => console.log('MongoDb CONNECTION CLOSED!!!'))
        .on('error', (error) => console.log(error))
}

connectDb();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use('/products', products);
// app.use('/sold', sold);
// app.use('/vendors', vendors);

app.use(bodyParser.urlencoded( { extended: true } ) );

app.get('/products', async (req, res) => {
    const products = await Product.find( {} )
    res.render('products/index', { products })
})

app.use((err, req, res, next) => {
    res.status(500).send()
})

app.listen(port, () => {
    console.log(`You are listening on port ${port}`)
})
