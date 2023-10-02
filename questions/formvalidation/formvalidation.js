const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/formvalidation.html");
});

app.post("/", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var number = req.body.number;

  var op = "";

  if (username.length < 3) {
    op += "username must be at least 3 characters \n";
  }

  if (password.length < 7) {
    op += "password must be at least 7 characters \n";
  }

  if (number.length != 10) {
    op += "number must be only 10 characters \n";
  }

  if (op.length == 0) op += "submitted succesfully\n";

  res.send(op);
});

app.listen(3000);
