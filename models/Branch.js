const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
  branch_name: String,
  location: String,
  date: Date,
});

BranchModel = mongoose.model("BranchInfo", BranchSchema);

module.exports = BranchModel;
