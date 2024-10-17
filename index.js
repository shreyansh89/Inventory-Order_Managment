const express = require('express');

const app = express();

const port = 8000;

const path = require('path');

const db = require("./config/mongoose")

const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());

// Routes
app.use('/auth', require("./routes/authroute"));
app.use('/products', require("./routes/productroute"));
app.use('/orders', require("./routes/orderroute"));


app.listen(port, ()=> console.log("server is running on  " + port));