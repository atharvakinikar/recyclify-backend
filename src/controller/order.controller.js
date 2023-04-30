const User = require("../models/user.model");
const Order = require("../models/order.model");
const Collector = require("../models/collector.model");
const { fileToBase64 } = require("../utils/fileToBase64");

async function getAllOrders(req, res) {
  const user = req.body;
  try {
    const userOrders = await Order.find({ userId: user.userID });
    return res.status(200).send(userOrders);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function placeOrder(req, res) {
  try {
    const order = JSON.parse(req.body.body)
    const response = await Order.create({
      userId: order.userID,
      productType: order.productType,
      items: order.items,
      quantity: order.quantity,
      product_image: fileToBase64(req.file),
      address: order.address,
      city: order.city,
      phone: order.phone,
    })
    return res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function orderBycity(req, res) {
  const collector = req.body;
  try {
    const collectorcity = await Collector.findOne({ _id: collector.id });
    const orderBycity = await Order.find({ city: collectorcity.city, completed: false });
    return res.status(200).send(orderBycity);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function completedorders(req, res) {
  try {
    const { id } = req.body;
    const completedorders = await Order.find({ userId: id, completed: true })
    return res.status(200).send(completedorders);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function incompletedorders(req, res) {
  try {
    const { id } = req.body;
    const incompletedorders = await Order.find({ userId: id, completed: false })
    return res.status(200).send(incompletedorders);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function orderCompleted(req, res) {
  const order = req.body;

  try {
    const updateOrder = await Order.updateOne(
      { _id: order.id },
      { completed: true }
    );
    return res.status(200).send(updateOrder);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

module.exports = {
  getAllOrders,
  placeOrder,
  orderBycity,
  completedorders,
  incompletedorders,
  orderCompleted,
};
