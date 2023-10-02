 // https://www.w3schools.com/tags/ref_httpmethods.asp#:~:text=The%20POST%20Method,%2Fdemo_form.php%20HTTP%2F1.1


const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    if(url==='/'){
res.write('<html>');
res.write('<head><title>enter message</title></head>');
res.write('<body><form action="/message" method = "POST"><input name="message"><button type = "submit">send</button></form></body>')
    res.end();
    }
    else if(url === '/message' && method =='POST'){
      //  const body = [];
      //  console.log(req);
        req.on('data',(chunk)=>{
            //body.push(chunk);
            res.end(chunk);
        });
        // req.on('end',()=>{
        //     const bodyData = Buffer.concat(body).toString();
        //     console.log(bodyData);
        //     res.end('DONE');
        // });

    }


});

server.listen(3050);

/*

CREATE - POST
READ - GET
UPDATE - PUT , PATCH
DELETE - DEL


*/




















