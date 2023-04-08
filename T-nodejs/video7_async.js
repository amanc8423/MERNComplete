const fs = require("fs");
// fs.writeFile('read.txt',"today is awesome day",
// (err)=> { 
//     console.log("file is created"); 
//     console.log(err);  // if no error it will give null

// });
// in async callback function is must, go in learn for extra knowledge that why we need callback func


// we pass them a function as an argument – a callback –
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it’s nothing), and start
//  checking for errors.

// fs.appendFile('read.txt'," this is append data ",(err)=>{
//     console.log("data added");
// });

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
})

