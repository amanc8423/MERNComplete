/*
1. what is namespace in socket.io  
2. how to create or use namespaces 
*/


var app = require('express')(); 
const http = require('http').Server(app);
var path = require('path');
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'socket.html'));
})


var users = 0;

// io.on (connection) is default it take '/' path inside it
// for custm namespace - 
  var cnsp =  io.of('/custom-namespace');
  var cnsp1 =  io.of('/custom-namespace-1'); //  we can create multiple namespace


cnsp.on('connection',(socket)=>{ // on is for event catch like on connect and disconnect
    console.log("user connected");

    cnsp.emit('customEvent','test event call');
   
        socket.broadcast.emit('newuserconnect',{message : users + ' users disconnected!'});  // io.sockets.emit it will send t all users

});


http.listen(3000,()=>{console.log("server on")});

































