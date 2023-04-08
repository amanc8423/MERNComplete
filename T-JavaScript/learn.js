// 1. if variable not declare with var let cnst it become global variable (usually we dont want our variable to be global it is considered as bad practise because in company when we code there are so many functions and we dont want our other function to get access of of our variable )
// 2. hoisting -   it is method in which if a varibale is defined after and it is called before then also it will give no error it will gove undefined but  and in case of function it will give correct output but remember
// // Hoisting in js

// Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation or interpretation phase. This means that you can use a variable or function before it has been declared.
// but it only works with var after ecma 2015 it will give error with let and const
// Here's an example:

// javascript
// Copy code
// console.log(message); // Output: undefined
// var message = 'Hello, world!';
// In this code, we're trying to log the value of the message variable before it has been declared. However, because of hoisting, the variable declaration is moved to the top of the scope, so the code is equivalent to:

// javascript
// Copy code
// var message;
// console.log(message); // Output: undefined
// message = 'Hello, world!';
// Function declarations are also hoisted. Here's an example:

// scss
// Copy code
// greetWorld(); // Output: 'Hello, world!'
// function greetWorld() {
//   console.log('Hello, world!');
// }
// In this code, we're calling the greetWorld function before it has been declared. However, because of hoisting, the function declaration is moved to the top of the scope, so the code is equivalent to:

// scss
// Copy code
// function greetWorld() {
//   console.log('Hello, world!');
// }
// greetWorld(); // Output: 'Hello, world!'
// It's important to note that only function declarations are hoisted, not function expressions. Here's an example:

// scss
// Copy code
// greetWorld(); // Output: Uncaught TypeError: greetWorld is not a function
// var greetWorld = function() {
//   console.log('Hello, world!');
// }
// In this code, we're trying to call the greetWorld function before it has been declared, but because we're using a function expression (assigning an anonymous function to a variable), hoisting doesn't apply. Instead, the variable greetWorld is hoisted, and its initial value is undefined, so when we try to call it as a function, we get a TypeError.

// It's generally considered good practice to declare variables and functions before using them, rather than relying on hoisting. This can help avoid confusion and bugs in your code.


// 3.  callback - Callback in js

// In JavaScript, a callback function is a function that is passed as an argument to another function and is called when the other function has completed its operation. Callback functions are commonly used in asynchronous programming, where a function may need to wait for a long-running task to complete before executing its callback.

// Here's an example:

// scss
// Copy code
// function doSomethingAsync(callback) {
//   setTimeout(function() {
//     var result = 42;
//     callback(result);
//   }, 1000);
// }

// function callbackFunction(result) {
//   console.log(result);
// }

// doSomethingAsync(callbackFunction);
// In this code, doSomethingAsync is a function that takes a callback function as its argument. The function sets a timeout of one second and then calls the callback function with a result of 42. callbackFunction is a separate function that simply logs its argument to the console.

// When we call doSomethingAsync with callbackFunction as its argument, doSomethingAsync executes its timeout and then calls callbackFunction with the result of 42. This demonstrates how the callback function can be used to handle the result of an asynchronous operation.

// Callbacks are a powerful feature of JavaScript and are used extensively in many libraries and frameworks. They allow for asynchronous operations to be performed without blocking the main thread, which can improve the performance and responsiveness of your code. However, callbacks can also lead to callback hell, where code becomes difficult to read and maintain due to the nested nature of callback functions. To avoid callback hell, many developers use Promises, async/await, or other techniques to handle asynchronous operations.

// 4. map vs foreach  foreach return undefined, map is chainable

// 5. dom vs bom alert,confirm,prompt comes in bom it is used with dom but it is part of bom

// 6.  