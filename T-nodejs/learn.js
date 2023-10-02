/* nodejs is server side runtime environment for js  
1 nodejs is javascript  open source server side runtime environment built on chrome's v8 engine.  nodejs is not lang.,framework,lib, its only a environemt 
earlier we were only using js in browser console through this we can   run nodejs in server
*/
// 2 repl (read eval print loop) is used to test simple js code to use it write node in terminal(_ for previous result, editor mode)
// 
// 3  callback in async - 
/*  Callback functions are an important part of asynchronous programming in many languages, including JavaScript. In an asynchronous program, a 
callback function is passed as an argument to another function, which then calls the callback function when the operation is complete.

The reason why we have callback functions in async programming is that it allows us to continue executing other code while we wait for an 
asynchronous operation to complete. Asynchronous operations, such as fetching data from a server or reading a file, can take some time to 
complete, and if we were to wait for them to finish before moving on to other tasks, our program would be very slow and unresponsive.

By using a callback function, we can initiate an asynchronous operation, and then continue executing other code while we wait for the operation 
to complete. When the operation finishes, the callback function is called, allowing us to handle the result of the operation.

Callback functions are particularly useful in event-driven programming, where events can occur at unpredictable times. In this case, a callback 
function can be used to handle the event when it occurs, rather than waiting for it to happen before continuing with the rest of the program.
*/

/* 4.  If you write require('./a') instead of require('./a.js') when requiring a file in Node.js, it will still work as long as the file you are 
requiring has the .js extension.

In Node.js, when you use the require() function to load a module or file, you can omit the file extension as long as the file you are requiring 
has the .js extension. Node.js will automatically append the .js extension to the file path you provide.

So, for example, if you have a file named a.js and you try to require it using require('./a') like this:

javascript
Copy code
const a = require('./a');
Node.js will be able to find the file and load its contents into the a variable.

However, if the file you are requiring does not have the .js extension, you will need to include the extension in the file path when using 
require().     */  



