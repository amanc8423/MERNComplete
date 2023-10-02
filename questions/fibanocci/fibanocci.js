const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http.createServer((req, res) => {
    var output = "";
  if (req.url === "/" && req.method === "GET") {
    const html = fs.readFileSync(__dirname + "/fibanocci.html", "utf8");
    res.end(html);
  } else if (req.url === "/" && req.method === "POST") {
    var body = "";
    req.on("data", (chunk) => {
      body += chunk;
      var { num } = querystring.parse(body);
      num = parseInt(num, 10);

      for (let i = 1; i <= num; i++) {
        var temp =fib(i);
        output+="fib of "+i+" is "+temp+"\n";
      }
    });

    req.on("end", () =>{
        res.end(output);
    })


  }
}).listen(3000);

function fib(x) {
  if (x <= 1) return 1;
  else return fib(x - 1) + fib(x - 2);
}
