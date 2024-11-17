const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: ["true", "please enter product name."] },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false /* product can exist without an image. img field is optional */,
    },
  },

  /* timestamps give us 2 more fields: createdAt and updatedAt */
  {
    timestamps: true,
  }
);

/* here we allow mongoose. We call it PRODUCT bcz it'il be plural on database. */
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
