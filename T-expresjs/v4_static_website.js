 
//middlewares-everything between req and res , routing is also a middleware
// express.static is   built-in middleware in express used to render static website in sever



const express = require('express');
const app = express();
const port = 5050;
const path =require('path');


//console.log(path.join(__dirname,'../v4.1.html')) // if file are in diff directory

//built-in middleware
//app.use(express.static(__dirname+"v4.html"));

app.get('/',(req,res)=>{
    res.send("welcome to home page")
});

app.get('/about',(req,res)=>{
    //res.status(200).send("welcome to about page")
    res.sendFile(path.join(__dirname,'v4.html'));
});

app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
});

app.get('/temp',(req,res)=>{
    res.send("welcome to temp page")
});

app.listen(port);











/*
In Node.js, middleware refers to a function that receives a request object, a response object, and a next function in the application's request-response cycle. The middleware function can manipulate the request or response objects, or execute additional code before passing control to the next middleware function in the stack.

For example, let's say we want to implement authentication for a web application. We can create a middleware function called authenticate that checks if the user is authenticated and if not, redirects them to the login page. Here's an example of how we can define this middleware function:

scss
Copy code
function authenticate(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
In the example above, authenticate checks if the user is authenticated using a hypothetical req.isAuthenticated() function. If the user is authenticated, next() is called to pass control to the next middleware function in the stack. If not, the user is redirected to the login page using res.redirect().

To use the authenticate middleware function in our application, we can simply add it to the middleware stack using app.use():

javascript
Copy code
const express = require('express');
const app = express();

app.use(authenticate);

// other middleware functions and route handlers

app.listen(3000, () => console.log('Server started on port 3000'));
In the example above, we're using the authenticate middleware function with app.use(). This means that every request to our application will go through the authenticate middleware function before reaching any subsequent middleware functions or route handlers.




*/

