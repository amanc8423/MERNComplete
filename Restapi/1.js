 const express = require("express");
 const app = express();

 const mongoose = require('mongoose');

 mongoose.connect("mongodb://127.0.0.1:27017/students-api");
 

 const Student = require('./models/students')

 app.use(express.json()); // inbuilt method to recognise the incoming request object as json object

//   const port = process.env.PORT || 3000;// when we host then it needs its own host so thist method will provde port

app.get('/',(req,res)=>{
    res.send("hello from get");
 })

 app.post('/students',(req,res)=>{
   const user = new Student(req.body);
user.save();
   
    res.send(req.body);
 })

app.listen(3000);








