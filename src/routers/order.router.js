const {
  getAllOrders,
  placeOrder,
  orderBycity,
  completedorders,
  orderCompleted,
} = require("../controller/order.controller");

const orderRouter = require("express").Router();

orderRouter.get("/userOrders", getAllOrders);
orderRouter.post("/placeOrder", placeOrder);
orderRouter.get("/orderBycity", orderBycity);
orderRouter.post("/completedorders", completedorders);
orderRouter.post("/incompletedorders", incompletedorders);
orderRouter.patch("/ordercomplete", orderCompleted);
module.exports = orderRouter;
