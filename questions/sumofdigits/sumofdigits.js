const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req,res)=>{

    if(req.method === 'GET' && req.url === '/'){
        const html = fs.readFileSync(__dirname+"/sumofdigits.html", 'utf8');
        res.end(html);
    }


    else if(req.method === 'POST' && req.url === '/'){
        var op= '';
        var body = '';
        req.on('data', (chunk)=>{
            body += chunk;
            var {num} = querystring.parse(body);
            num = parseInt(num, 10);
            op ="sum of the digits is "+sumofdigits(num); 


        })

        req.on('end', ()=>{
            res.end(op);
        })

    }
    

}).listen(3000);


function sumofdigits(x){
     var answer = 0;

    while(x > 0){
        answer+=Math.floor(x%10);
        x = Math.floor(x/10);
    }

    return answer;
}