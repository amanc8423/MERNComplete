/*

error handling in socket.io

1  why we need error handling - 
2  what are events for error handling -

*/



var app = require('express')(); 
const http = require('http').Server(app);
var path = require('path');
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'socket.html'));
})


var roomno = 1;
var full = 0;


io.on('connection',(socket)=>{ // on is for event catch like on connect and disconnect
    console.log("user connected");

    socket.join("room-"+roomno);

    io.sockets.in("room-"+roomno).emit('connectedRoom',"you are connected to room no . "+roomno);
  full++;
  if(full>=2){
    full=0;
    roomno++;
  }
    socket.on('disconnect',()=>{ 
        console.log("user disconnected");})
       
});


http.listen(3000,()=>{console.log("server on")});

































