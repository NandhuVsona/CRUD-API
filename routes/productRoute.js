const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/api/products").get(getAllProducts).post(createProduct);

router
  .route("/api/product/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
