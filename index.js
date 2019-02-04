/* For this to work, you need to run 'npm install express -g' */
const express = require('express');
const app = express();
const port = 3000;

/* Main side "localhost:3000/"  */
app.get("/", (req, res) => {
    res.send("Hej");
});

/* How to get and open JSON-file "localhost:3000/json" */
app.get("/json", (req, res) => {
    res.json(
        [
            {
                user: "Helga",
                age: 5
            },
            {
               user: "Arne",
               age: 35,
               userID: 666
            }
        ]
    )
});

/* This is an example on how your products site with a specific product ID "localhost:3000/products/33" */ 
app.get("/products/:productID", (req, res) => {
    res.send("This is info about the product: " + req.params.productID);
});

/* Querys way on the same code "localhost:3000/products?category=33" */
app.get("/products", (req, res) => {
    res.send("This is info on the product: " + req.query.category);
});
 
/* Just an example on how About shows localhost:3000/about */ 
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
    res.send('About')
});

/* If you go to a non-based site, Error 404 will show localhost:3000* */
app.get("*", (req, res) => {
    res.send("Error 404");
});
/* Here is listen for the port and if the port is open, it will show in your Terminal */
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
