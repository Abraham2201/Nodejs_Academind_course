const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In the middleware main page');
    // res.send('<h1>The "main path / " page here!</h1>');
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); //Good way in which we go up one directory and then we access the views
    console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    //render is a method provided by express js so we can use the default template engine that we setted before
    const products = adminData.products;
    res.render('shop', { prods: products, docTitle: 'Dynamic Shop' });

});

module.exports = router;