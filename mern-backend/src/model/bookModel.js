const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Fiction", "Non-Fiction", "Islamic", "Science", "Biography", "Other"],
    },
    bookDescription: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    bookTitle: {
      type: String,
      required: true,
      unique: true,
    },
    bookPdfUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const book = mongoose.model("Book", bookSchema);
module.exports = book;
