const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/downloadFile.html");
});

app.post("/",download);

app.listen(3000);

function download(req, res, next) {
  console.log(req.body.name);
  const fname = req.body.name;
  const fd = fs.readFileSync(fname, "utf8");
  res.end(fd);
}
