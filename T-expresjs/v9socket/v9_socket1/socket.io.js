


//socket.io => use to create realtime applications
//socket.io is a library that enables real-time,bidirectional and event-based communication b/w browser and server
//socket.io site


/*

events in socket.io - 
pre-reserved events -> server-side events -> connection,disconnect,message,reconnect,ping,join,leave
client-side evenst -> connect,connect_error,connect_timeout etc.

custom-events ->  

*/

var app = require('express')(); 
const http = require('http').Server(app);
var path = require('path');
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'socket.html'));
})

io.on('connection',(socket)=>{ // on is for event catch like on connect and disconnect
    console.log("user connected");

    setTimeout(()=>{
        socket.send('sent message from server by prereserved events') //send - use to send message
    },3000);

    socket.on('disconnect',()=>{ // use of 'on' is to catch events
        console.log("user disconnected");
    });
});


http.listen(3000,()=>{console.log("server on")});

































