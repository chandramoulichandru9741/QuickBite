const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const app = express();
require('dotenv').config();

const port = 3000;

//EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {})
  .catch((error) => {
    console.log(error);
  })

app.use(express.static(__dirname));

// API route
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
