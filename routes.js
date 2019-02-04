const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

router.get('*', (req, res) => {
    res.send("Error 404");
});

module.exports = router;