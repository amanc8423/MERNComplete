/*
1. broadcasting -

a - user can see how many user connected
b - if user connect then we will showa welcome message to user, and other users can see how many user connected

*/



var app = require('express')(); 
const http = require('http').Server(app);
var path = require('path');
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'socket.html'));
})


var users = 0;


io.on('connection',(socket)=>{ // on is for event catch like on connect and disconnect
    console.log("user connected");

    users++;
io.sockets.emit('broadcast',{message : users + ' users connected'});

   
socket.on('disconnect',()=>{ // use of 'on' is to catch events
        console.log("user disconnected");
       
        users--;
io.sockets.emit('broadcast',{message : users + ' users disconnected'}); // io.sockets.emit it will send t all users

    });
});


http.listen(3000,()=>{console.log("server on")});

































