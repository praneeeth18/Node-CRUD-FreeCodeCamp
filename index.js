require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const productRoute = require('./routes/product.route.js');
const app = express();
const PORT = process.env.PORT || 3500;

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);
app.get('/', (req, res) => {
    res.send("Hello from Node API Server");
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}.`));
});
