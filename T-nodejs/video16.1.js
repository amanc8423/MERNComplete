var http = require('http');

const server = http.createServer((req,res)=>{
   // console.log(req.body);
    res.end("hello aman")
});

server.listen(5000);











/*
Sure, I'd be happy to explain the code you provided!

javascript
Copy code
var http = require('http');
This line of code imports the built-in Node.js 'http' module, which provides functionality for creating and interacting with HTTP servers and 
clients.

javascript
Copy code
const server = http.createServer((req,res)=>{
    res.end("hello aman")
});
This code creates an HTTP server using the createServer() method provided by the 'http' module. The createServer() method takes a callback 
function as an argument, which is executed whenever a new HTTP request is made to the server.

The callback function in this case takes two parameters: req (short for "request") and res (short for "response"). req contains information about 
the incoming HTTP request, such as the URL, headers, and any data included in the request body. res contains methods and properties for building
 an HTTP response to send back to the client.

In this case, the callback function simply sends back the string "hello aman" as the HTTP response body using the end() method of the res object.
 The end() method tells Node.js to finalize the response and send it back to the client.

scss
Copy code
server.listen(5000);
This line of code starts the HTTP server listening on port 5000, so that it can receive incoming requests from clients. Once the server is 
started, it will continue running until it is explicitly closed or the Node.js process is terminated.




Aman Choudhary
who is giving req,res

The req and res parameters in the callback function are automatically passed by Node.js when a new HTTP request is made to the server.

Whenever a client makes an HTTP request to the server, Node.js creates a new http.IncomingMessage object to represent the incoming request. This 
object contains properties and methods that allow you to access information about the request, such as the request headers and URL.

Similarly, when you want to send a response back to the client, you create a new http.ServerResponse object, which represents the outgoing 
response. This object contains methods and properties that allow you to set the response headers, status code, and body content.

So, the req and res parameters in the callback function are just references to these automatically generated objects, which you can then use 
to handle the incoming request and send the outgoing response.




Aman Choudhary
so createServer get invoke after we write server.listen()

No, that's not the case. The createServer() method is called first to create an instance of the HTTP server. The server is then set to listen 
for incoming requests on a specific port using the listen() method.

In the code you provided:

javascript
Copy code
const server = http.createServer((req,res)=>{
    res.end("hello aman")
});

server.listen(5000);
The createServer() method is called first, passing a callback function that will be invoked every time a new HTTP request
 is made to the server. In this case, the callback function simply sends back the string "hello aman" as the HTTP response body.

Once the server is created, the listen() method is called on the server object to start listening for incoming requests on port 5000.

So, the createServer() method is called before listen(), not after.




*/