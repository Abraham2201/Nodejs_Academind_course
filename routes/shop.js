const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In the middleware main page');
    // res.send('<h1>The "main path / " page here!</h1>');
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')); //Good way in which we go up one directory and then we access to the views
    console.log(adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;