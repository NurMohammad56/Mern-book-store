const express = require("express");
const router = express.Router();
const bookModel = require("../model/bookModel");

// Create
router.post("/upload-book", async (req, res) => {
  try {
    const data = req.body;
    const result = await bookModel.create(data);
    res.status(201).json({ status: "Success", data: result });
  } catch (error) {
    console.log("Failed to upload book!", error);
    res.status(500).json({ status: "Error", message: "Failed to upload book" });
  }
});

module.exports = router;
