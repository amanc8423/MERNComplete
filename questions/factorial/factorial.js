const http = require('http');
const fs = require('fs');
const querystring = require('querystring');


http.createServer((req,res)=>{
    if(req.url === '/' && req.method === 'GET'){
        const html = fs.readFileSync(__dirname+"/factorial.html", 'utf8');
        res.end(html);
    }

    else if(req.url === '/' && req.method === 'POST'){
        var body = '';
        req.on('data',(chunk)=>{
            body+=chunk;
            var {num} = querystring.parse(body);

            var output = '';

            num = parseInt(num);

            for(let i = 1; i<=num; i++){
                var temp = 1;
                for(let j = i; j>=1; j--){
                    temp *=j;
                }

                output += "factorial of "+i+" is "+temp+"\n";
            }

            res.end(output);
        })
    }
}).listen(3000);