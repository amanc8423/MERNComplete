const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/socket.html");
});

var clients = 0;
var display = 0;

io.on("connection", (socket) => {
  clients++;
  display = 0;

  for (let i = 1; i <= clients; i++) {
    if (Math.floor(i % 2) != 0) {
      display++;
    }
  }

  io.emit("sendMessage", { msg: Math.floor(display) });
  socket.on("disconnect", () => {
    clients--;
    display = 0;
        for (let i = 1; i <= clients; i++) {
      if (i % 2 != 0) {
        display++;
      }
    }
    io.emit("sendMessage", { msg: Math.floor(display) });
  });
});

server.listen(3000);
