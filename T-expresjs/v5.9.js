// built-in middlleware


const express = require('express');
const app = express();
const PORT = 3050;
 
// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));  // instead of express we can use bodyparser const bodyparser = require('body-parser');
 


app.get('/profile', function (req, res) {
    
    res.send({name:"aman"});
});

app.post('/profile', function (req, res) {
    console.log(req.body);
    res.send();
});

 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});