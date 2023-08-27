//The Product schema and model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  oneLiner: String,
  price: Number,
  quantity: Number,
  sectionName: String,
  imageURL: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
