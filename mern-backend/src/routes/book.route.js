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

// Find by category and Get all book
router.get("/all-books", async (req, res) => {
    try {
        const category = req.query.category;

        let result;

        if (category) {
            result = await bookModel.find({ category: category });
        } else {
            result = await bookModel.find();
        }

        if (result.length === 0) {
            return res.status(404).json({ status: "Error", message: "No books found in this category" });
        }

        res.status(200).json({ status: "Success", data: result });
    } catch (e) {
        console.log("Failed to get books!", e);
        res.status(500).json({ status: "Error", message: "Failed to get books" });
    }
});


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
