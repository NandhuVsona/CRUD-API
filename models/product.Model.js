const { time, timeStamp } = require("console");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timeStamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
