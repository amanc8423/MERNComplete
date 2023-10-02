// https://www.youtube.com/watch?v=lY6icfhap2o
//https://blog.webdevsimplified.com/2019-12/express-middleware-in-depth/

const express = require("express");
const app = express();


const reqFilter = (req,res,next)=>{
    console.log('reqFilter');
    next();
}

app.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('welcome to home page')
});

app.get('/users',(req,res)=>{
    res.send('welcome to home page')
});

app.listen(5000);



/*
https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js
*/