const express = require("express");
const router = express.Router(); // Instance of Router in Express
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/register.html"));
});

module.exports = router;
