// Import the express module
const express = require("express");

// Create a new express app
const app = express();

// A simple middleware function
function myMiddleware(req, res, next) {
  console.log("This is a middleware function!");
  console.log(`${req.method} ${req.url}`);
  next(); // This tells Node.js to move on to the next middleware function
}


// Attach the middleware function to the route handler
 // app.use(myMiddleware);// it wll work with all
app.use('/about',myMiddleware);// it will only work with /home route

// Attach the route handler function to a specific route
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














