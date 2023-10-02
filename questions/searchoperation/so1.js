const { readFileSync } = require("fs");
const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    const htmldata = readFileSync(__dirname + "/so1.html");
    res.end(htmldata);
  }
}).listen(3000);
