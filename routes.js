/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

/* Here we access a (about.html) HTML-file */ 
router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

/* About us, Swedish version */
router.get('/om-oss', (req, res) => {
    var options = {root: __dirname + '/se'}
    
    res.sendFile('om-oss.html', options, (err) => {
        if (err) {
            console.error(err);
        }
    });
});

module.exports = router;