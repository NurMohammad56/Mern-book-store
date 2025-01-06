const express = require("express");
const router = express.Router();
const bookModel = require("../model/bookModel");

// Create
router.post("/upload-books", async (req, res) => {
  try {
    const data = req.body;
    const result = await bookModel.create(data);
    res.status(201).json({ status: "Success", data: result });
  } catch (e) {
    console.log("Failed to upload book!", e);
    res.status(500).json({ status: "Error", message: "Failed to upload book" });
  }
});

// Read
router.get("/all-books", async (req, res) => {
    try {
      const result = await bookModel.find()
      res.status(201).json({status: "Success", data: result});

    }catch (e) {
      console.log("Failed to getting book!", e);
      res.status(500).json({status: "Error", message: "Failed to getting books"});
    }
})

module.exports = router;
