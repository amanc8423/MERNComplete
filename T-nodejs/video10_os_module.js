const os = require("os");

console.log(os.arch()); // processor type
console.log(os.freemem()/1024/1024/1024);// freemem in bytes
console.log(os.totalmem()/1024/1024/1024);// total mem
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());// type of current os



