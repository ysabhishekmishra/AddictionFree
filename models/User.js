const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  role: String,
  email:String,
  username: String,
  password: String,
});

userModel = mongoose.model("data", UserSchema);

module.exports = userModel;
