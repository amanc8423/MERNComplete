
// path module we work with directory and path
const path = require("path");

console.log(path.dirname("C:\Users\dell\Desktop\T\T-nodejs\video11_path_module.js"));
console.log(path.extname('C:\Users\dell\Desktop\T\T-nodejs\video11_path_module.js'));
console.log(path.basename('C:\Users\dell\Desktop\T\T-nodejs\video11_path_module.js'));
console.log(path.parse('C:\Users\dell\Desktop\T\T-nodejs\video11_path_module.js')); // it is returning object

const myname = path.parse('C:\Users\dell\Desktop\T\T-nodejs\video11_path_module.js');

 

console.log(myname.name);
console.log(myname.root);







