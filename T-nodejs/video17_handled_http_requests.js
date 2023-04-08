


const http = require("http");


const server = http.createServer((req,res)=>{
    //console.log(req.url);  // read on internet for req.url
    if(req.url=="/"){ 
res.end('hello from the other side'); }
else if(req.url=="/about"){
    res.end('hello from the about side');
}
else if(req.url=="/contact"){
    res.end('hello from the contact side');
}
else{
    res.writeHead(404,{"content-type" :"text/html"}); // now it will give error in console 
    res.end(' <h1>page does not exist</h1>');
}


});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no. 8000");
});


/*
Req.url

I'm assuming that you're asking about the req.url property in the context of a web application.

req.url is a property of the request object in Node.js that represents the URL of the current request. When a client sends a request to a web 
server, it includes a URL that identifies the resource it wants to access. The req.url property provides access to this URL so that the web 
application can read and manipulate it as needed.

For example, if a client sends a GET request to https://example.com/products?id=123, the req.url property would contain the 
string "/products?id=123". The web application could then use this information to extract the product ID from the query string and retrieve
 the corresponding product from a database.

Note that req.url does not include the domain name or protocol of the request URL. To access these components, you would need to use other 
properties of the request object such as req.protocol and req.hostname.


*/


/*

res.write vs res.end

In Node.js, res.write() and res.end() are methods that can be used to send a response back to the client when handling an HTTP request.

res.write() is used to send a chunk of the response body to the client. You can call this method multiple times to send multiple chunks of data. 
It is important to note that calling res.write() does not end the response, so you must call res.end() after sending all the data.

res.end() is used to signal the end of the response. When this method is called, Node.js will automatically send any remaining data in the
 response buffer to the client and terminate the connection.

Here's an example usage of these two methods:

javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.write('This is the first chunk of data\n');
  res.write('This is the second chunk of data\n');

  res.end('This is the last chunk of data');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
In the above example, res.writeHead() sets the HTTP response header to specify the content type of the response as text/plain. 
Then res.write() is called twice to send two chunks of data to the client, and finally res.end() is called to signal the end of the response
 and send the last chunk of data.




Aman Choudhary
So instead of res.write we can only use res.end

Yes, you can use res.end() to send the entire response in one go instead of using res.write() to send multiple chunks of data. 
Here's an example:

javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('This is the response data');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
In the above example, res.writeHead() sets the HTTP response header to specify the content type of the response as text/plain. 
Then res.end() is called to send the entire response in one go. Note that res.end() is called with the response data as its argument. 
This is because res.end() can optionally take some data to be sent as the final chunk of the response body. If you don't need to send any data,
you can call res.end() without any arguments.




Aman Choudhary
What is use of res.writehead 

res.writeHead() is a method in Node.js used to set the HTTP response header before sending the response body. The HTTP header contains important
 information about the response, such as the content type, status code, and caching directives.

Here's an example of how to use res.writeHead() to set the content type of a response to text/html:

javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, World!</h1>');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
In the above example, res.writeHead() is used to set the HTTP status code to 200 (which means "OK") and the Content-Type header to text/html. 
The res.end() method is then called with an HTML string to send as the response body.

By setting the appropriate headers using res.writeHead(), you can provide the client with information such as the encoding of the response body,
 caching instructions, cookies, and more.






ChatGPT Mar 14 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us
 improve.




*/