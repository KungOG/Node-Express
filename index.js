/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

/* The different modules */ 
var router = require('./routes.js')
var productRoutes = require('./product.js')

/* How to access a styles... */
app.use(express.static('public'));
/* and pictures */
app.use(express.static('images'));

var logVisits = function(req, res, next) {
    let input = new Date() + ' ' + req.path + '\n';
    fs.appendFile('accessLog', input, (err) => {
        if (err) throw err;
    });
    next();
}

app.use(logVisits);

/* Routes.js should only run */
app.use('/', router);

/* This should only run when you seach for the products */ 
app.use('/products', productRoutes);

/* Here is listen for the port and if the port is open, it will show in your Terminal */
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
