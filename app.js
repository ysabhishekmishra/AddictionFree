const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const userLogin = require("./routes/Login");
const userRegister = require("./routes/Register");

app.use("/login", userLogin);
app.use("/register", userRegister);

app.listen(8000, () => {
  console.log("sucess server started");
});
