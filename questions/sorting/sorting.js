const http = require('http');
const fs = require('fs');
const querystring = require('querystring');



http.createServer((req,res)=>{

    if(req.url === '/' && req.method === 'GET'){ 

    const html = fs.readFileSync(__dirname + '/sorting.html', 'utf8');
    res.write(html);
    res.end();
    }

    else if(req.url === '/' && req.method === 'POST'){ 
        var array ='';

        req.on('data', (chunk)=>{
            array+=chunk;
            var body = querystring.parse(array);
            const sArr = body.array.split(" ");
            var nArr = [];
            
            sArr.forEach(element => {
                const temp = parseInt(element);
               nArr.push(temp);
            });
           
            console.log(nArr.sort());
            res.end(nArr.sort().toString());

        });
       
        
    }


}).listen(3000);