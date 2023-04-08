// Streams are the objects that let you to read data from a source and write data to a destination in continuos fashion. There are four types of streams in Node.js:

//eg. generally streaming means listening to music or watching video in real time , instead of downloading a file to your computer and watching it later

// Readable: This stream is used for read operations.
// Writable: This stream is used for write operations.
// Duplex: This stream can be used for both read and write operations.
// Transform: It is type of duplex stream where the output is computed according to input.

// Each type of stream is an Event emitter instance and throws several events at different times. Following are some commonly used events:

// Data:This event is fired when there is data available to read.
// End:This event is fired when there is no more data available to read.
// Error: This event is fired when there is any error receiving or writing data.
// Finish:This event is fired when all data has been flushed to underlying system.


const fs = require('fs');
const http = require('http');

const server = http.createServer(); 

/*   this is usual way not streaming way

server.on("request", (req, res) => {
    fs.readFile("read.txt", (err, data) => {
      if (err) return console.error(err);
      res.end(data.toString()) ;
    });
});

server.listen(7000,"127.0.0.1");   */


//2nd way streaming way

//2nd Way
//   Reading from a Stream
//   Create a readable stream
//   Handle stream events --> data, end, and error
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("read123.txt");

  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", (err) => {    // if error happens 
    console.log(err);
    res.end("file not found");

  });

});

server.listen(7000,"127.0.0.1",()=>{console.log("server on")}); 












/*Server.on

server.on is a method in Node.js that allows you to attach event handlers to the HTTP server object. This method is used to register listeners for various events that occur on the server, such as the "request" event, which is emitted when a new HTTP request is received.

The basic syntax for server.on is as follows:

csharp
Copy code
server.on(event, listener)
Here, event is a string that specifies the name of the event to listen for, and listener is a callback function that will be invoked when the event is emitted. The listener function typically takes one or more arguments that provide information about the event that occurred.

For example, to listen for the "request" event and handle incoming HTTP requests, you could do something like this:

javascript
Copy code
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // handle the request here
})

server.listen(3000, () => {
  console.log('Server listening on port 3000')
})
In this example, the server.on method is used to attach a listener function to the "request" event. When a new HTTP request is received by the server, this listener function will be called with the req and res objects, which represent the incoming request and the server response, respectively.*/




/*
Instead of server.on we can continue it inside http.createServer()

Yes, you can use http.createServer() method to create a server instance and register the request event handler using the .on() method. Here's an example:

javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  // request event handler
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
In the above example, the http.createServer() method takes a callback function that will be executed every time a request is received by the server. This callback function is equivalent to the server.on('request', ...) method, but is more concise.


*/


