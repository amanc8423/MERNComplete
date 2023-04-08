//middleware - it is function it has three parameters req,res,next
//  req -> middleware -> middleware ......->res
// next is used to pass tonext middleware
// next() -> pass to next middleware
//next('route) -> skip current middleware
//next(anyhig else) -> erroro handling



const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log("this is a middleware being called...in every step");
    next(); // if not next it will be loading
});

app.use('/',(req,res,next)=>{
    console.log("this is a middleware being called...only in /");
    next();
});

app.use('/home',(req,res,next)=>{
    console.log("this is a middleware being called...only in /home");
    next();
});




app.get("/", (req, res)=> {
    res.send("Hello");
  });
app.get("/home", (req, res)=>  {
    res.send("Hello, home");
  });
app.get("/about", (req, res)=>  {
    res.send("Hello, about");
  });

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});




























