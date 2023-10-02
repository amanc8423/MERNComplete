// modules are same as js libraries that is predefined set of functions we want in our code
// nodejs has set of built-in modules

const fs = require("fs"); // fs module is file system module

//fs.writeFileSync('read.txt',"welcome home aman");

// if file is not present it is created else overwrite

// fs.writeFileSync('read.txt'," hi aman");

 //fs.appendFileSync("read.txt"," i am fine tq"); // if we only use  this it is same as writeFileSync if file is not there it will create else will append

const bu_data=fs.readFileSync('read.txt');

// nodejs includes an additional datatype called buffer
//(not available in browser's js)
// buffer is mainly used to store binary data-
//-while reading from a file or receiving pkts. over the netwrok

// console.log(bu_data);
// console.log(String(bu_data)); // we cal also use .toString() i.e. var data = buf_data.toString();

// to rename file
fs.renameSync('read.txt','readwrite.txt');
 

