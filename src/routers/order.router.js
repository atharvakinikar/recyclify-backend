const {
  getAllOrders,
  placeOrder,
  orderBycity,
  completedorders,
  incompletedorders,
  orderCompleted,
} = require("../controller/order.controller");
const { fileParser } = require("../middlewares/multer");

const orderRouter = require("express").Router();

orderRouter.get("/userOrders", getAllOrders);
orderRouter.post("/placeOrder", fileParser, placeOrder);
orderRouter.post("/orderBycity", orderBycity);
orderRouter.post("/completedorders", completedorders);
orderRouter.post("/incompleteorders", incompletedorders);
orderRouter.patch("/ordercomplete", orderCompleted);
module.exports = orderRouter;
