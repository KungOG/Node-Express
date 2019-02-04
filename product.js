/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
var router = express.Router();

/* This is all of our products */ 
router.get('/', (req, res) => {
    res.send('Products');
});
/* This is the specifik ID on a Product */ 
router.get('/:productID', (req, res) => {
    res.send(`Info about the products ID: ${req.params.productID}`);
});

module.exports = router