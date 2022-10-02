const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Створення схеми моделі
const productScheme = new Schema({
  title: String,
  price: Number,
  photo: {
    data: Buffer,
    contentType: String,
  },
});
//Створення моделі
const productModel = mongoose.model("Product", productScheme);

module.exports = productModel;
