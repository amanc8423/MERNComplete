const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/socket.html");
});

var clients = 0;

io.on("connection", (socket) => {
  clients++;
  console.log("hello ");

  socket.broadcast.emit("newconnection", { msg: clients });

  socket.on('disconnect',()=>{
    console.log("disconnected");
    clients--;
    io.emit("newconnection", { msg: clients });
  })
});

server.listen(3000);
