const express = require("express");
const router = express.Router();
const path = require("path");
const UserModel = require("../models/User");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/dashboard.html"));
});

router.get("/pdata", (req, res) => {
  UserModel.find().then((result)=>{
    res.send(result);
  });
});

module.exports = router;