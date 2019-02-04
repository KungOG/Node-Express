/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
var router = express.Router();

/* Accessing image and HTML-file (index.html)*/
router.get('/', (req, res) => {
    var options = {root: './'};
    res.sendFile('index.html', options);
});

/* Here we access a (about.html) HTML-file */ 
router.get('/about', (req, res) => {
    var options = {root: './'};
    res.sendFile('about.html', options);
});

/* About us, Swedish version */
router.get('/om-oss', (req, res) => {
    var options = {root: './' + '/se'}
    
    res.sendFile('om-oss.html', options, (err) => {
        if (err) {
            console.error(err);
        }
    });
});

module.exports = router;