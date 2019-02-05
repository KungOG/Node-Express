const express = require('express');
const router = express.Router();

/* Get the JSON file */
var books = require('../books.json');

/* Return a object that fits with the same ID */ 
function getBook(bookId) {
    return books.find(book => book.bookId == bookId);
};

/* */
router.get('/', (req, res) => {
    res.json(books);
});

/* */
router.use('/:bookId', (req, res, next) => {
    let bookId = req.params.bookId;
    let book = getBook(bookId);
    res.json(book);
});

router.get('*', (req, res) => {
    res.send('Error 404')
});

module.exports = router;