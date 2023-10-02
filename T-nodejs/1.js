// console.log(5);
// b - accept a number from input text field of 
// a client page and provide the output value as 
// a response with a click events on a button  
// -->


var http = require("http");

 let server = http.createServer((req,res)=>{

if(req.url=="/"){
    res.write('<html> <form action="/result" method="POST">  Input : <input type="Number" name="INPUT_NUMBER_IS"><input type="submit" value="CLICK"></form> </html>');
   res.end();
}
else if(req.url=="/result" && req.method == "POST"){
    req.on('data',(data1)=>{
        console.log(String(data1));
        let c = String(data1);
        res.end(data1);
    } );
   
}


});

server.listen(3500,()=>{
    console.log("server on at 3500");
});
