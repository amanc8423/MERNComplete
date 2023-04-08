
const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {


  // 3rd way
  const rstream = fs.createReadStream("mybio.txt");
  rstream.pipe(res);  //res.pipe( destination, options )
});

server.listen(7070,"127.0.0.1");


// best efficient for streaming(read and write)






