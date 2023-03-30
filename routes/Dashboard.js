const express = require("express");
const router = express.Router();
const path = require("path");
const AppointmentModel = require("../models/Appointment");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/dashboard.html"));
});

router.post("/appointment", async (req, res) => {
  AppointmentModel.create({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
    payment_id: req.body.payment_id,
  }).then((result) => {
    res.status(200);
    console.log(result);
  });
  // res.send("Data Submited");
  res.sendFile(path.join(__dirname, "../pages/dashboard.html"));
  console.log(req.body.time);
  console.log(req.body.description);
});

router.get("/getappointment", async (req, res) => {
  const getapoint = await AppointmentModel.find();

  res.status(200).send({
    getapoint,
  });
});
module.exports = router;
