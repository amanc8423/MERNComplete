const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      const data = fs.readFileSync(__dirname + "/dummy.html", "utf8");

      res.end(data);
    } else if (req.url === "/" && req.method === "POST") {
        var body = '';

        const f1data = fs.readFileSync("file.txt", "utf8");

        fs.writeFileSync("file1.txt",f1data,"utf8");
      req.on('data',(filedata)=>{
            body+=filedata;

      })

      req.on('end',()=>{
          const x  = querystring.parse(body);
          console.log(x);
           res.setHeader('Content-Type', 'application/json');
           res.end(x.arun);
      });
      
    }
  })
  .listen(3000);

// console.log();
