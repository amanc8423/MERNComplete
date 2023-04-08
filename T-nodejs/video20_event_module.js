// What Is an EventEmitter?
// The EventEmitter class is a built-in class that resides in the events module

//Every action on a computer is an event. Like when a connection is made or a file is opened.
// also check on w3schools
// Events Module 
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.

// Example 1— Registering for the event to be fired only one time using once.

// Example 2 — Create an event emitter instance and register a couple of callbacks

// Example 3— Registering for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");


/*
Node.js is a popular runtime environment for building server-side applications. Events in Node.js refer to the mechanism for handling 
and responding to actions or changes that occur within an application.

In Node.js, events are implemented using the EventEmitter class, which is a built-in module in Node.js. The EventEmitter class is used to 
create custom events and event listeners.

Here are some examples of using events in Node.js:

Handling HTTP requests
Node.js provides an HTTP module that allows you to create a web server. When a client makes a request to the server, an event is emitted,
 and you can handle this event using the on method of the server object. Here's an example:

javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.on('listening', () => {
  console.log('Server is listening on port 3000');
});

server.listen(3000);
In the above example, the createServer method creates an HTTP server. The on method is used to handle the listening event, which is 
emitted when the server starts listening for incoming requests.

Handling file system events
Node.js provides a module called fs that allows you to work with the file system. You can use the watch method of the fs module to
 watch for changes in a file or directory. Here's an example:

javascript
Copy code
const fs = require('fs');

fs.watch('./test.txt', (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  console.log(`filename provided: ${filename}`);
});
In the above example, the watch method is used to watch for changes in the test.txt file. When a change occurs, the watch method 
emits a change event, which is handled using a callback function that logs the event type and filename.

Creating custom events
You can also create custom events in Node.js using the EventEmitter class. Here's an example:

javascript
Copy code
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');
In the above example, a custom event is created using the MyEmitter class, which extends the EventEmitter class. 
An event listener is added to the myEmitter object using the on method, and the emit method is used to emit the event event.

These are just a few examples of using events in Node.js. Events are a powerful mechanism for building event-driven
 applications in Node.js, and they are widely used in libraries and frameworks like Express.js and Socket.IO.
*/