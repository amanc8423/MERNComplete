// how to serve static folder in express - we make public
//express middleware have access to res and req 
// express.static

 
//middlewares-everything between req and res , routing is also a middleware
// express.static built-in middleware in express



const express = require('express');
const app = express();
const port = 6050;
const path =require('path');


//console.log(path.join(__dirname,'../v4.1.html')) // if file are in diff directory

//built-in middleware
app.use(express.static(path.join(__dirname,"public"))); // it has high priority and open in /

app.get('/',(req,res)=>{
    res.send("welcome to home page")
});

app.get('/about',(req,res)=>{
    res.status(200).send("welcome to about page")

});

app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
});

app.get('/temp',(req,res)=>{
    res.send("welcome to temp page")
});

app.listen(port);




