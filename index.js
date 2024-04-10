const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Product = require("./models/product.Model");
const router = require("./routes/productRoute");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extends:false}))

//routes middleware
app.use('/',router)

//Database Connections
mongoose
  .connect(
    "mongodb+srv://nandhuv139:dM03WCs8ItBHw0Gv@backenddb.ekyvggy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Successfully connected to Database..!");
    app.listen(port, () => console.log(`http://localhost:${port}`));
  })
  .catch((err) => {
    console.log(err.message);
  });

