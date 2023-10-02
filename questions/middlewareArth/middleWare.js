const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/middleWare.html");
});

app.post("/",arth, (req, res, next) => {
    
});

app.listen(3000);

function arth(req, res, next) {
  var num = req.body.num;
  console.log(++num);
  res.send(num.toString());
}
