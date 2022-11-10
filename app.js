const express = require('express');
const app = express();

const productRoute= require('./routes/products')
const orderRoute= require('./routes/order')
 
app.use('/products',productRoute)
app.use('/orders',orderRoute)


module.exports = app