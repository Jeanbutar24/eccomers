const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    size: {
      type: Array,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    color: {
      type: Array,
      require: true,
    },
    categories: {
      type: Array,
      require: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
