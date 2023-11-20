const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.json());

const products = require('./routes/products');
const sold = require('./routes/sold');
const vendors = require('./routes/vendors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/products', products);
app.use('/sold', sold);
app.use('/vendors', vendors);

app.use(bodyParser.urlencoded( { extended: true } ) );

app.use((err, req, res, next) => {
    res.status(500).send()
})

app.listen(port, () => {
    console.log(`You are listening on port ${port}`)
})
