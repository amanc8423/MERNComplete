const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/arth.html");
});

app.get("/:num1/:num2", (req, res) => {
  var op = "";
  var num1 = parseInt(req.params.num1);
  console.log(num1);
  var num2 = parseInt(req.params.num2);
  op += `addition is ${num1 + num2} `;
  op += ` sub is ${num1 - num2} `;

  op += ` mul is ${num1 * num2} `;

  op += `div is ${num1 / num2}`;

  res.send(op);
});

app.get("/submit", (req, res) => {
  console.log(req.query);
  console.log(req.query.num1);
  res.redirect(`/${req.query.num1}/${req.query.num2}`);
});

app.listen(3000);
