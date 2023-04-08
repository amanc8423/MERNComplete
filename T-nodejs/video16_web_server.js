// to access web pages of any web appln we need a web server it will handlw all http request for web appln

  // nodejs  provide capability to create your own web server which will handl http request asynchronously


  // 1 the http.createServer() method includes request and response parameters which is suuplied by nodejs
  // 2 the request object can be used to get information about the 
//current http request 
//eg. url,requestheader , and data

// 3 the response object can be used to send a response  for a 

// 4 if the response from the HTTP server is supposed to be

const http = require("http");

//req and res are default parameter // server give res after getting req
// we are creating our server therefore we are responding

// const server = http.createServer((req,res)=>{
// res.end('hello from the other side');
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no. 8000");
// }); // listen call indicates that we are ready to listen client request 


 http.createServer((req,res)=>{
  res.end('hello from the other side');
  }).listen(8000,"127.0.0.1",()=>{
      console.log("listening to the port no. 8000");
  });
