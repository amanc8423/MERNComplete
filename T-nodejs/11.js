// Q. Implement an express application for the following Accept a number from the input text
// field of a user web page and perform the basic arithmetic operations, increment (++),
// decrement (-), and square, on the number inside a middleware function of server node.js
// application. Display the output values in the user web page as a response to the click event
// from the button.



// Sure, here's an example implementation of an Express application that performs basic operations on a number input from user web page:

// Copy codeconst express = require('express');
// const app = express();

// // Middleware function to perform arithmetic operations on input number
// const performOperations = (req, res, next) => {
//   const num = parseInt(req.query.number); // Get input number from query string
//   const increment = num + 1;
//   const decrement = num - 1;
//   const square = num * num;
//   req.operations = { increment, decrement, square }; // Store results in request object
//   next(); // Call next middleware function
// };

// // Route handler for GET request to display results
// app.get('/results', (req, res) => {
//   const { increment, decrement, square } = req.operations; // Get results from request object
//   res.send(`Increment: ${increment}, Decrement: ${decrement}, Square: ${square}`);
// });

// // Serve HTML file with input form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
// This application defines a middleware function 
// performOperations
//  that takes the input number from the query string, performs the arithmetic operations, and stores the results in the request object. The route handler for the 
// /results
//  endpoint then retrieves the results from the request object and sends them as a response to the user.

// To use this application, you would need to create an HTML file with a form that allows the user to input a number and submit it to the server. Here's an example HTML file:

// Copy code<!DOCTYPE html>
// <html>
//   <head>
//     <title>Arithmetic Operations</title>
//   </head>
//   <body>
//     <form action="/results" method="GET">
//       <label for="number">Enter a number:</label>
//       <input type="number" id="number" name="number">
//       <button type="submit">Submit</button>
//     </form>
//   </body>
// </html>
// When the user submits the form, the input number is sent to the server as a query string parameter. The server then performs the arithmetic operations and sends the results back to the user as a response to the 
// /results
//  endpoint.


// use post method to solve aboce question


// Sure here's an updated implementation that uses the POST method instead of:

// Copy code 
//const express = require('express');
// const app = express();

// // Middleware function to perform arithmetic operations on input number
// const performOperations = (req, res, next) => {
//   const num = parseInt(req.body.number); // Get input number from request body
//   const increment = num + 1;
//   const decrement = num - 1;
//   const square = num * num;
//   req.operations = { increment, decrement, square }; // Store results in request object
//   next(); // Call next middleware function
// };

// // Route handler for POST request to display results
// app.post('/results', performOperations, (req, res) => {
//   const { increment, decrement, square } = req.operations; // Get results from request object
//   res.send(`Increment: ${increment}, Decrement: ${decrement}, Square: ${square}`);
// });

// // Serve HTML file with input form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
// This implementation defines a middleware function 
// performOperations
//  that takes the input number from the request body (instead of the query string), performs the arithmetic operations, and stores the results in the request object. The route handler for the 
// /results
//  endpoint then retrieves the results from the request object and sends them as a response to the user.

// To use this application, you would need to update the HTML form to use the POST method instead of GET:

// Copy code<!DOCTYPE html>
// <html>
//   <head>
//     <title>Arithmetic Operations</title>
//   </head>
//   <body>
//     <form action="/results" method="POST">
//       <label for="number">Enter a number:</label>
//       <input type="number" id="number" name="number">
//       <button type="submit">Submit</button>
//     </form>
//   </body>
// </html>
// When the user submits the form, the input number is sent to the server in the request body. The server then performs the arithmetic operations and sends the results back to the user as a response to the 
// /results
//  endpoint.


// dont we need bodyparser middleware


// Yes, you are correct. In order to parse the request body, need to use a middleware like 
// -parser
// . Here's an updated implementation that includes the 
// body-parser
//  middleware:

// Copy codeconst express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// // Use body-parser middleware to parse request body
// app.use(bodyParser.urlencoded({ extended: true }));

// // Middleware function to perform arithmetic operations on input number
// const performOperations = (req, res, next) => {
//   const num = parseInt(req.body.number); // Get input number from request body
//   const increment = num + 1;
//   const decrement = num - 1;
//   const square = num * num;
//   req.operations = { increment, decrement, square }; // Store results in request object
//   next(); // Call next middleware function
// };

// // Route handler for POST request to display results
// app.post('/results', performOperations, (req, res) => {
//   const { increment, decrement, square } = req.operations; // Get results from request object
//   res.send(`Increment: ${increment}, Decrement: ${decrement}, Square: ${square}`);
// });

// // Serve HTML file with input form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server listening on port 3000');

// what is req.body vs req.query


// req.body
//  and 
// req.query
//  are both properties of thereq` object in Express, but are used to access different of the HTTP request.

// req.body
//  is used to access the body of a POST, PUT, or PATCH request. When a client a POST request with a body, the body is sent in the request payload, which can be accessed using 
// req.body
// . The 
// body-parser
//  middleware is used to parse the request body and make it available in 
// req.body
// .

// For example, in the previous implementation, we used 
// req.body.number
//  to access the input number from the request body in the 
// performOperations
//  middleware function.

// req.query
//  is used to access the query string parameters of a GET request. When a client sends a GET request with query string parameters, the parameters are sent in the URL, and can be accessed using 
// req.query
// .

// For example, in the original implementation, we used 
// req.query.number
//  to access the input number from the query string in the 
// performOperations
//  middleware function.

// In summary, 
// req.body
//  is used to access the body of a POST, PUT, or PATCH request, while 
// req.query
//  is used to access the query string parameters of a GET request.


// here what does number means id type or name of input field


// In the previous implementation, 
// number
//  is the 
// name
//  attribute of the input field in the HTML form

// When the user submits the form, the input value is sent to the server as part of the request body with the 
// name
//  attribute as the key and the input value as the value. In this case, the input field has the 
// name
//  attribute set to 
// number
// , so the input value is sent to the server as 
// number: <input value>
//  in the request body.

// In the server-side code, we use 
// req.body.number
//  to access the input value from the request body. This is because 
// number
//  is the key in the request body that corresponds to the input value.


/*

what is req.operations


req.operations
 is a custom property that is added to the 
req
 object the 
performOperations
 middleware function in the example Express application I provided earlier.

The purpose of this property is to store the results of the arithmetic operations performed on the input number, so that they can be accessed by the route handler and displayed in the response to the user.

In the 
performOperations
 middleware function, the input number is extracted from the request body using 
req.body.number
, and then the arithmetic operations (increment, decrement, and square) are performed on the number. The results of these operations are stored in an object with properties named 
increment
, 
decrement
, and 
square
, respectively.

This object is then added to the 
req
 object as a new property named 
operations
 using 
req.operations = { increment, decrement, square };
. This makes the 
operations
 object available to the route handler as 
req.operations
, so that it can be used to display the results of the operations in the response to the user.



*/



/*In the 
app.use(bodyParser.urlencoded({ extended: true }))
 line code, the 
extended
 is set to 
true
. This option is used to determine how the values in the URL-encoded data will be parsed.

When 
extended
 is set to 
true
, the values can be of any data type, not just strings and arrays. This means that the URL-encoded data can contain nested objects and arrays, and they will be parsed as such.

For example, if the URL-encoded data contains a nested object like this:

Copy codename=John&address[city]=New+York&address[state]=NY
With 
extended
 set to 
true
, the resulting object in 
req.body
 would be:

Copy code{
  name: 'John',
  address: {
    city: 'New York',
    state: 'NY'
  }
}
If 
extended
 is set to 
false
, the values will be parsed as strings or arrays only, and any nested objects or arrays will be ignored.

*/