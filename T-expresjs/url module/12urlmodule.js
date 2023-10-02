const http = require('http');
const url = require('url');
const fs =  require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
  const parsedUrl = url.parse(req.url,true);
  const filename = parsedUrl.pathname.substring(1);
  console.log(filename);

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('File not found');
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
//fs.appendFileSync(filename,"my name is aman1");





  });
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});