const http = require("http");
const querystring = require("querystring");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      const html = fs.readFileSync(__dirname + "/armstrong.html", "utf8");
      res.end(html);
    }
    else if (req.url === "/" && req.method === "POST") {
      var body = "";
      req.on("data", (chunk) => {
        body += chunk;
        var { num } = querystring.parse(body);
        num = parseInt(num, 10);
        res.end(armstrongnumbers(num));
      });
    }
  })
  .listen(3000);

function armstrongnumbers(x) {
    console.log("hello");
  var output = "";
  var i = 1;

  while (x) {
    var sum = 0;
    var num = i;

    while (num) {
      sum += Math.pow(Math.floor(num % 10), 3);
      num = Math.floor(num/ 10);
    }


    if (sum == i) {
        console.log(sum,i);
      output += i + " is a amstrong number \n";
      console.log(output);
      x--;
    }

    i++;
  }

  return output;
}
