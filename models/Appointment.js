const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  date: String,
  time: Number,
  description:String
});

AppointmentModel = mongoose.model("appointment", AppointmentSchema);

module.exports = AppointmentModel;