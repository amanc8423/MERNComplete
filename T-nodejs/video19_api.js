// api application programming iterface , which is a software that allows two applications or software to communicate to each other .
// api - it is service which allows us to  request data




// const http = require("http");
// const fs= require("fs");

// const server = http.createServer((req,res)=>{
//     //console.log(req.url);  // read on internet for req.url
//     if(req.url=="/"){ 
// res.end('hello from the other side'); }
// else if(req.url=="/about"){
//     res.end('hello from the about side');
// }
// else if(req.url=="/contact"){
//     res.end('hello from the contact side');
// }
// else if(req.url=="/userapi"){
//     fs.readFile(`${__dirname}/package.json`,"utf-8",(err,data)=>{
//        res.writeHead(200,{"content-type":"application/json"});
//        const objdata = JSON.parse(data); 
//        res.end(objdata);
        

//     }); // here in fs we use __dirname to avoid error and search chatgpt why we use this
//    // res.end('hello from the userapi sides');
// }
// else{
//     res.writeHead(404,{"content-type" :"text/html"}); // now it will give error in console 
//     res.end(' <h1>page does not exist</h1>');
// }


// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no. 8000");
// });


// content type
// If you don't specify the Content-Type header in your HTTP response, the default content type will be text/html. This means that the client (such as a web browser) will assume that the response is HTML and will render it accordingly.

// However, if your response contains data that is not HTML (such as JSON data), you should set the Content-Type header to the appropriate content type. This tells the client what kind of data to expect and how to handle it.

// For example, if your response contains JSON data, you should set the Content-Type header to application/json as follows:

// css
// Copy code
// res.writeHead(200, { 'Content-Type': 'application/json' });
// This tells the client that the response is JSON data and it should be handled accordingly. If you don't set the Content-Type header to application/json, the client may assume that the data is HTML and may render it incorrectly or not at all.

// In summary, while it is possible to omit the Content-Type header in your HTTP response, it's generally recommended to set it to the appropriate content type to ensure that the client can handle the response correctly.


/*
I apologize for the confusion in my previous answer.

When you access the "/userapi" path, the code will execute the fs.readFile method to read the content of the "package.json" file. However, since this method is asynchronous, it will not block the execution of the following lines of code.

Therefore, the res.end('hello from the userapi sides'); line is executed immediately after fs.readFile method is called, before the file contents are read and the response is sent back to the client. As a result, you will see the message "hello from the userapi sides" in the browser.

To fix this issue, you can move the res.end('hello from the userapi sides'); line inside the fs.readFile callback function, after sending the JSON response to the client. This way, the response is sent only after the file contents are read and parsed successfully.

Here's an updated code snippet that should work as expected:

javascript
Copy code
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello from the other side");
  } else if (req.url == "/about") {
    res.end("hello from the about side");
  } else if (req.url == "/contact") {
    res.end("hello from the contact side");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/package.json`, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objdata = JSON.parse(data);
        res.end(JSON.stringify(objdata));
      }
      res.end("hello from the userapi sides");
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no. 8000");
});
In this updated code, the res.end("hello from the userapi sides"); line has been moved inside the fs.readFile callback function, after the JSON response is sent to the client.




*/





const http = require("http");
const fs= require("fs");

const server = http.createServer((req,res)=>{
    //console.log(req.url);  // read on internet for req.url
    if(req.url=="/"){ 
res.end('hello from the other side'); }
else if(req.url=="/about"){
    res.end('hello from the about side');
}
else if(req.url=="/contact"){
    res.end('hello from the contact side');
}
else if(req.url=="/userapi"){
    let data = fs.readFileSync(`${__dirname}/package.json`,"utf-8");
           res.writeHead(200,{"content-type":"application/json"}); // if not this response header will consider it as html
           data = String(data);
      // const objdata = JSON.parse(data); 
       res.end(data);
        

 // here in fs we use __dirname to avoid error and search chatgpt why we use this
   // res.end('hello from the userapi sides');
}
else{
    res.writeHead(404,{"content-type" :"text/html"}); // now it will give error in console 
    res.end(' <h1>page does not exist</h1>');
}


});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no. 8000");
});
