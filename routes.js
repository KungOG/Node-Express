/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

module.exports = router;