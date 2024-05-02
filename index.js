const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/products.model.js')
const app = express()

app.use(express.json());

const productRoute = require("./routes/product.routes.js");
app.use("/api/product", productRoute);

app.get('/', (req, res) => {
    res.send('Hello From The GET of index.js');
});


mongoose.connect("mongodb+srv://parvezshaik9885:A6W5RjTLgp5BUgaW@databasedb.szqstit.mongodb.net/NODEAPI?retryWrites=true&w=majority&appName=DatabaseDB")
    .then(() => {
        console.log("Connected");
        app.listen(3000, () => {
            console.log('Running on 3000');
        })
    })
    .catch(() => {
        console.log("Not Connected");
    })

// parvezshaik9885
// A6W5RjTLgp5BUgaW