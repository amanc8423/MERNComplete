//socket.io => use to create realtime applications
//socket.io is a library that enables real-time,bidirectional and event-based communication b/w browser and server
//socket.io site


// programming experience channel

var app = require('express')(); 
const http = require('http').Server(app);
var path = require('path');
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'socket.html'));
})

io.on('connection',(socket)=>{ // use connection only, its reserve keyword
    console.log("user connected");
    //console.log(socket);

    socket.on("message",(data)=>{
      console.log(data);
    })

    socket.on('disconnect',()=>{
        console.log("user disconnected");
    });
});


http.listen(3050,()=>{console.log("server on")});





/*

Var app = require ('express')();
Const http = require ('http').Server(app);
Const io = require ('socket.io')(http);
Explain everyline in detail 

Sure, I'd be happy to explain what each line does:

javascript
Copy code
var app = require('express')();
This line imports the express module, creates a new instance of an Express application, and assigns that instance to the variable app. You can use this instance to define routes, middleware, and other settings for your web application.

javascript
Copy code
const http = require('http').Server(app);
This line imports the http module and creates a new HTTP server instance using the Server() method of the http module. The Server() method takes the app instance as an argument, allowing you to use the same application logic for both HTTP and WebSocket connections.

javascript
Copy code
const io = require('socket.io')(http);
This line imports the socket.io module and creates a new instance of a socket.io server using the Server() method of the socket.io module. The Server() method takes the http server instance as an argument, allowing you to use the same server instance for both HTTP and WebSocket connections.

Now that you have a socket.io server instance, you can use it to handle WebSocket connections and listen for events:

javascript
Copy code
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});
In this example, we're listening for the connection event, which is fired whenever a new client connects to the server. When this event is fired, we log a message to the console and define some additional event handlers:

disconnect: This event is fired whenever a client disconnects from the server. We log a message to the console when this happens.
chat message: This event is fired whenever a client sends a new chat message to the server. We log the message to the console and emit the message to all connected clients using io.emit().
*/ 






