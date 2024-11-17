const Product = require("../models/product.model.js");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Assign the result to a variable
    res.status(200).json(products); // Use the variable here
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    /* after importing: */
    /* await takes time */
    const product = await Product.create(req.body);
    res.status(200).json(product); /* 200 success */
  } catch (error) {
    console.log("post error.");
    res.status(500).json({
      message: error.message,
    }); /* 500 server error demektir. o olursa bu satır dönecek. */
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(
      id,
      req.body
    ); /* id'yi req.body ile değiştirmek, güncellemek istiyorum. req.body = what user gives. */

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } /* eğer product var değil ise, error dönsün. */

    /* product var ise, 200 success mesaj ile product dönsün. */
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    }); /* 500 server error demektir. o olursa bu satır dönecek. */
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted succesfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
