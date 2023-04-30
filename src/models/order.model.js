const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productType: String,
  items: String,
  quantity: String,
  address: String,
  city: String,
  product_image: String,
  phone: Number,
  completed: { type: Boolean, default: false },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
