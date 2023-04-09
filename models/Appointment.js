const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  date: String,
  time: String,
  description: String,
  payment_id: String,
});

AppointmentModel = mongoose.model("appointment", AppointmentSchema);

module.exports = AppointmentModel;
