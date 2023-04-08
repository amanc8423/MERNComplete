// module wrapper function // https://www.youtube.com/watch?v=WlWdbtJoCLQ
// it is same as iife in js
// iife (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
//It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// watch thapavideo for iife

/* behind the scene nodejs wrap every code inside module wrapper function

(function(exports, require, module, __filename, __dirname){
   const name = 'aman';
    console.log(name);
 });  
 
 */

// read more about it on - https://stackoverflow.com/questions/51349900/what-does-node-module-wrapper-function-mean-in-node

// we use iife because every code is private inside it

const name = 'aman';
console.log(name); // giving underline bec it can give error with another libraries using name as property name use myname instead


console.log(__dirname); // way changed in new ecma so error go on stack overflow  // but now working
console.log(__filename);//https://stackoverflow.com/questions/51349900/what-does-node-module-wrapper-function-mean-in-node
// use chat gpt // use 'import.meta.url'



// detail explanation - 

/*   in nodejs every file is treated as module which has private scope for its functions and variables
Module wrapper function 
In Node.js, every module is wrapped in a module wrapper function that is executed by Node.js when the module is loaded. The module wrapper function provides a private scope for the module, which helps to avoid naming conflicts and provides a mechanism for exporting the module's public API.

Here is an example of what the module wrapper function looks like in Node.js:

javascript
Copy code
(function(exports, require, module, __filename, __dirname) {
  // Your code goes here
});
The exports, require, and module parameters are used to define the module's public API, which can be accessed by other modules that require this module. The __filename and __dirname parameters are the full path and directory of the module file, respectively.

Here's a brief overview of what each parameter does:

exports: This is an object that contains all the public properties and functions that are exposed by the module. You can add properties and functions to this object to make them available to other modules.
require: This is a function that you can use to require other modules within your module.
module: This is an object that represents the module itself. It contains information about the module, such as its ID, filename, and whether it has been loaded or not.
__filename: This is a string that contains the full path to the module file.
__dirname: This is a string that contains the full path to the directory that contains the module file.
Here's an example of how you can use the exports object to define the public API of your module:

javascript
Copy code
(function(exports, require, module, __filename, __dirname) {
  function sayHello() {
    console.log('Hello, world!');
  }

  exports.sayHello = sayHello;
});
In this example, we have defined a function sayHello and added it to the exports object. This makes the sayHello function available to other modules that require this module:

javascript
Copy code
const myModule = require('./my-module.js');
myModule.sayHello(); // Output: "Hello, world!"

*/



