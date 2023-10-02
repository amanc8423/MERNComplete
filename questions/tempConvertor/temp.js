const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
http
  .createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
      const html = fs.readFileSync(__dirname + "/temp.html", "utf8");
      res.end(html);
    } else if (req.method === "POST" && req.url == "/") {
      var body = "";
      req.on("data", (chunk) => {
        body += chunk;
        var { temp, conversion } = querystring.parse(body);
        temp = parseInt(temp, 10);
        console.log(conversion);
        if (conversion == "f") {
          
          res.end((temp * 1.8 + 32).toString());
        }

        else {
            res.end(((temp-32)/ 1.8).toString());

        }
      });
    }
  })
  .listen(3000);
