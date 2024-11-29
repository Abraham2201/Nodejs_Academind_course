const express = require('express');
const parser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop');

const application = express(); //This constant can be used as a handler. so we can pass it into the http.createServer(application);

// application.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); //Allows the request to continue to the next middleware in line
// });

application.use(parser.urlencoded({ extended: true }));
application.use(express.static(path.join(__dirname, 'public')));
application.use('/admin', adminData.routes); // when we add at the beginning the /admin, all routes having /admin will be handled by the adminRouter. It's a filter.
application.use(shopRoutes);
application.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

application.listen(3000);