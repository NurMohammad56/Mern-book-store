const express = require("express");
const mongoose = require("mongoose");
const app = new express();
require("dotenv").config();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// routes
const bookRoutes = require("./src/routes/book.route");
app.use("/api/v1/books", bookRoutes);

// Database
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
main()
  .then(() =>
    console.log("Alhamdulillah Database Successfully Connected..........")
  )
  .catch((err) => console.log(err));

module.exports = app;
