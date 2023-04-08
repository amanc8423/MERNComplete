 // iife


 let b = 8;
(()=>{
    let b =5;
    console.log(b); } 

)();
// here iife create private scope for b

//so b cant pollute outside code and it cant be accessed outside

console.log(b);





/*
IIFE stands for Immediately Invoked Function Expression. It is a common JavaScript design pattern that allows you to execute a function immediately after it is defined.

The syntax for creating an IIFE is to wrap the function definition in parentheses, and then immediately invoke it using the parentheses operator, like this:

javascript
Copy code
(function() {
  // code here
})();
The function definition is enclosed in parentheses, which creates a function expression. The final pair of parentheses immediately invoke the function, causing it to be executed.

IIFEs are often used to create a private scope for variables and functions within a larger program. By wrapping your code in an IIFE, you can prevent variables and functions from polluting the global scope, and help prevent naming conflicts with other libraries or scripts that may be included on the same page.
*/  
