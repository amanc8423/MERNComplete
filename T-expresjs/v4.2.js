// custom middleware & params
const express = require('express');
const app = express();
const port = 6050;
const path =require('path');

// custom middleware
const amanMidlleware=(req,res,next)=>{
    //console.log(req);
    console.log("hello");
    next();// when we use two middleware we want another to run after thsi
} 

app.use(amanMidlleware);
app.use(express.static(path.join(__dirname,"public"))); 



app.get('/',(req,res)=>{   // app.get is also middleware but here we dont need next because this is last one to execute 
    res.send("welcome to home page")
});

app.get('/about/:name',(req,res)=>{
    res.status(200).send("welcome to about page "+req.params.name)

});

app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
});

app.get('/temp',(req,res)=>{
    res.send("welcome to temp page")
});

app.listen(port);



 


/*
app.get('/about/:name',(req,res)=>{
    res.status(200).send("welcome to about page "+req.params.name)

});

This code sets up a route handler for the "/about/:name" path, where ":name" is a route parameter. When a request is made to this route, the value of ":name" in the URL will be captured and made available in the req.params object.

For example, if a request is made to "/about/john", req.params.name will be set to "john".

The route handler sends a response with the text "welcome to about page " followed by the value of req.params.name. So if req.params.name is "john", the response would be "welcome to about page john".

This is a common way to create dynamic routes in Express, where the URL can contain variable values that are used to generate a response. In this case, the route parameter ":name" allows the handler to personalize the response based on the value in the URL.




*/