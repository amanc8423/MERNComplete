const fs = require('fs');
const http = require('http');

let server = http.createServer((req,res)=>{
    
    fs.readFile('package.json',"utf-8",(e,data)=>{
        res.end(data);
    })
});

server.listen(5000);