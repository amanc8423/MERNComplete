//socket.io => use to create realtime applications
//socket.io is a library that enables real-time,bidirectional and event-based communication b/w browser and server
//socket.io site

var app = require('express')(); 
const http = require('http').Server(app);
var path = require('path');
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'socket.html'));
})

io.on('connection',(socket)=>{ // use coonnection only its reserve
    console.log("user connected");
    //console.log(socket);

    socket.on('disconnect',()=>{
        console.log("user disconnected");
    });
});


http.listen(3000,()=>{console.log("server on")});












