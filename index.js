/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
const app = express();
const port = 3000;
var router = require('./routes.js')

app.use('/', router);

/* Here is listen for the port and if the port is open, it will show in your Terminal */
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
