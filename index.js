const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js"); /* importing the model */
const productRoute = require("./routes/product.route.js");
/* middleware */
app.use(express.json()); /* allowing nodejs to read json */
app.use(
  express.urlencoded({ extended: true })
); /* burada da form encode kullanmaya izin veriliyor. */

app.listen(3000, () =>
  console.log("app.listendan gelen mesaj: Server started on port 3000")
);

/* routes */
app.use("/api/products", productRoute);

/* whatever client send is REQ, whatever serevr send RES: */
app.get("/", (req, res) => {
  res.send("...app.get ve res.sendden gelen msj: Hello from node api!");
});

/* allows me to see listings: */
/* app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({}); // Assign the result to a variable
    res.status(200).json(products); // Use the variable here
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

/* get details with id. product kullandık. çünkü single product datası */
/* app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

/* this used for save smt. we will save data to the mongodb*/
/* app.post("/api/products", async (req, res) => { */
/* try { */
/* after importing: */
/* await takes time */
/*  const product = await Product.create(req.body);
    res.status(200).json(product); /* 200 success */
/* } catch (error) {
    console.log("post error.");
    res.status(500).json({
      message: error.message, */
/* }); 500 server error demektir. o olursa bu satır dönecek. 
  }
}); */

/* update product */
/* app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(
      id,
      req.body
    ); 
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } 
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}); */

/* delete product */
/* app.delete("/api/products/:id", async (req, res) => {
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
}); */

/* connect mogodb */
mongoose
  .connect(
    "mongodb+srv://zumrakb:8ux0BCCJyz74QLgV@backenddb.tmxpa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => console.log("Mongodb connected"))
  .catch(() => console.log("Connection failed."));
