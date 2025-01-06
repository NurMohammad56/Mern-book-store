const express = require("express");
const router = express.Router();
const bookModel = require("../model/bookModel");

// Upload a book
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

// Get all book
router.get("/all-books", async (req, res) => {
    try {
      const result = await bookModel.find()
      res.status(201).json({status: "Success", data: result});

    }catch (e) {
      console.log("Failed to getting book!", e);
      res.status(500).json({status: "Error", message: "Failed to getting books"});
    }
})

// Update a book
router.patch('/update-books/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const reqBody = req.body;
        const result = await bookModel.findByIdAndUpdate(id, reqBody, {upsert: true}, {new:true});
        res.status(201).json({status: "Success", data: result});
    }catch (e) {
        console.log("Failed to update book!", e);
        res.status(500).json({status: "Error", message: "Failed to update book!", e});
    }
})

// Delete a book
router.delete('/delete-books/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await bookModel.findByIdAndDelete(id)
        res.status(201).json({status: "Success", data: result});
    }catch (e) {
        console.log("Failed to delete book!", e);
        res.status(500).json({status: "Error", message: "Failed to delete book!", e});
    }
})

module.exports = router;
