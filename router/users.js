/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
var router = express.Router();
var users = require('../users.json');

/* Watches if the user has the correct ID and if it exist inside of the JSON file */
function returnUser(uID) {
    return users.find(user => user.userID == uID);
  };

  /* Get the JSON when you enter the site */
  router.get("/", (req, res) => {
    res.json(users);
  });

  /* If they add up, it print out the ID */
  router.use("/:userID", (req, res, next) => {
    let uID = req.params.userID;
    let user = returnUser(uID);
    res.json(user);
    next();
  });
  
  module.exports = router;