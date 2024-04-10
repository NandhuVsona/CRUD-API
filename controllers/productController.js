const Product = require("../models/product.Model");

Product
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
//---------------------------------------------------------
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
//------------------------------------------------------------
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
//-----------------------------------------------------------
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    const updatedProduct = await Product.findById(req.params.id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
//--------------------------------------------------------------
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    const deletedProduct = await Product.findById(req.params.id);
    res.status(200).json({});
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
};
