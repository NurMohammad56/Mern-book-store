const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Book is here.....");
});

module.exports = router;
