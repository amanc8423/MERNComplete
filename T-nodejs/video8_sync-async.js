const fs= require("fs");
 fs.readFile("read123.txt","utf-8",(err,data)=>{ console.log(data);});
console.log("after data"); // async behaviour

 fs.readFile("read1234.txt","utf-8"); // error bec we need callabck func for async
console.log("after data"); // async behaviour

// we use callback function to check what we want next after our asynch function has execute ad if it throw error we can handle it bec if there
// was any error in async it will not stop execution of other code










