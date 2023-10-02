const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    const writestream = fs.createWriteStream('video21.2.txt');
    for(let i = 1; i<=10 ; i++){
        writestream.write(`${i}\n`);
    }
res.end("done");
})

server.listen(2020);