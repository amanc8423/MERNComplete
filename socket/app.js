var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

var io = require('socket.io')(http);

app.get('/',function(req,res){

var options = {
    root: path.join(__dirname)
}

    var fileName = 'index.html';
    res.sendFile(fileName,options);
});

io.on('connection',function(){
    console.log('A user connected');
} )


http.listen(3000,function(){
    console.log("server ready ");
});



