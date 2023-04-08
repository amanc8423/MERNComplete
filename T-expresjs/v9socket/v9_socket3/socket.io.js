/*


1. custom event - a create on server side and catch on client side
2. custom event - a create on client side and catch on server side


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


  socket.on('myCustomEventFromClientSide',(data)=>{
       console.log(data);
  })


    socket.on('disconnect',()=>{ // use of 'on' is to catch events
        console.log("user disconnected");
    });
});


http.listen(3000,()=>{console.log("server on")});

































