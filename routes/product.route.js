const express = require("express");
const Product = require("../models/product.model.js");
const router =
  express.Router(); /* router will point to other things like router.get */

const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
