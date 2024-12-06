const express = require('express');
const parser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const { engine } = require('express-handlebars');

const application = express(); //This constant can be used as a handler. so we can pass it into the http.createServer(application);

application.set('view engine', 'pug'); //set() heps us to set a global configuration value.(keys, configuration items)
//pug is supported out of the box.
application.set('views', 'views'); // this is mainly used when our views folder is named differently or in another location.

// application.use((req, res, next) => {
//     console.log('In the middleware');
//     next(); //Allows the request to continue to the next middleware in line
// });

application.use(parser.urlencoded({ extended: false }));
application.use(express.static(path.join(__dirname, 'public')));
application.use('/admin', adminData.routes); // when we add at the beginning the /admin, all routes having /admin will be handled by the adminRouter. It's a filter.
application.use(shopRoutes);
application.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
    res.status(404).render('page-not-found');
});

application.listen(3000);