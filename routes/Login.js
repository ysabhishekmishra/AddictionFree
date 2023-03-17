const express = require("express");
const router = express.Router(); // Instance of Router in Express
const path = require("path");
const UserModel = require("../models/User");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/login.html"));
});


var userdata = new Object();

router.post("/", async function (req, res) {
  try {
    // check if the user exists
    const user = await UserModel.findOne({ username: req.body.username });
    userdata= user

    console.log(userdata)
    // const userdata = await UserModel.find({ username: req.body.username },role);

    if (user) {
      const result = req.body.password === user.password;
      if (result) {
        if (user.role === "Admin") {
          res.sendFile(path.join(__dirname, "../pages/admin.html"));
        }
        else if (user.role === "Doctor") {
          res.sendFile(path.join(__dirname, "../pages/doctor.html"));
        }
        else {
          res.sendFile(path.join(__dirname, "../pages/dashboard.html"));
        }
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



router.get('/patients', async(req, res) => {
  try {
    const patients = await UserModel.find({ role: "Patient" });
    res.status(200).send({
      patients
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving patients from database.");
  }
});


router.get('/doctor', async(req, res) => {
  try {
    const doctor = await UserModel.find({ role: "Doctor" });
    res.status(200).send({
      doctor
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving Doctor from database.");
  }
});


router.get('/getsingle', (req, res) => {
  res.status(200).send(
    
      userdata
   
   )
})

module.exports = router;