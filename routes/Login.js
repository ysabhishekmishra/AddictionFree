const express = require("express");
const router = express.Router(); // Instance of Router in Express
const path = require("path");
const UserModel = require("../models/User");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/login.html"));
});



router.post("/", async function(req, res){
  try {
      // check if the user exists
      const user = await UserModel.findOne({ username: req.body.username });
      if (user) {
        //check if password matches
        const result = req.body.password === user.password;
        if (result) {
          res.sendFile(path.join(__dirname, "../pages/dashboard.html"));
        } else {
          res.status(400).json({ error: "password doesn't match" });
        }
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
});


module.exports = router;