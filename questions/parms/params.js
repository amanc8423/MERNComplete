const express = require("express");
const path = require("path");
const app = express();
const querystring = require("querystring");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/params.html"));
});

app.get("/:num1/:num2", (req, res) => {
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  var sum = num1 + num2;
  console.log(sum);
  res.end(sum.toString());
});


app.post('/submit', (req, res) => {
    var numbers = '';
    req.on('data',(data)=>{
        numbers+=data;

    })

    req.on('end',()=>{
        const {num1, num2} =querystring.parse(numbers);
        res.redirect(`/${num1}/${num2}`);
        // res.end();
    })
})

app.listen(3000);
