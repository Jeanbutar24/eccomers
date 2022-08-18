const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./router/user");
const authRouter = require("./router/auth");
const productRouter = require("./router/product");
const cartRouter = require("./router/cart");
const orderRouter = require("./router/order");
const addressRouter = require("./router/address");
const path = require("path");
const stripeRouter = require("./router/stripe");
const cors = require("cors");
dotenv.config();
//////////////////////////////////////////////////
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connect to mongo sucses"))
  .catch((err) => console.log(err));
////////////////////////////////////////////////
app.use(cors());
app.use(express.json());
app.use("/api/v1", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/address", addressRouter);
app.use("/api/checkout", stripeRouter);

//////////////////////////////////////////////
const dirname = path.resolve();
app.use(express.static(path.join(dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(dirname, "/frontend/build/index.html"))
);
//////////////////////////////////////////////
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
//////////////////////////////////////////////

app.listen(process.env.PORT || 5000, () => {
  console.log("server running on port", 5000);
});
