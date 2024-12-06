const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();
const products = [];

router.get('/add-product', (req, res, next) => {
    // console.log('In the middleware');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/add-product', (req, res, next) => {
    // console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');

});

// module.exports = router;
exports.routes = router;
exports.products = products;