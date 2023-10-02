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


/*

Dependencies vs modules in nodejs

In Node.js, "dependencies" and "modules" are related concepts but they have different meanings.

A "dependency" in Node.js refers to a third-party package or library that your application requires in order to function properly. Dependencies are typically specified in a file called package.json, which is located in the root directory of your Node.js project. The package.json file contains metadata about your application, as well as a list of all the dependencies that your application requires to run. Dependencies can be installed using the npm install command, which will download the required packages from the npm registry and add them to your project's node_modules directory.

A "module" in Node.js refers to a self-contained block of code that encapsulates a specific functionality. Modules can be used to organize your code into smaller, reusable components, and can be easily shared between different parts of your application. In Node.js, modules are typically defined in separate files, and can be loaded into your application using the require() function. When you require() a module, Node.js will execute the code in the module and return the exports object, which contains all of the module's public functions and variables.

To summarize, dependencies are third-party packages or libraries that your application requires to function, while modules are self-contained blocks of code that encapsulate specific functionality and can be easily shared between different parts of your application.
*/
