// let a = prompt("hello aman");

// console.log(typeof a);  prompt ot 

//alert("message");


const prompt=require("prompt-sync") (); // npm install prompt-sync we use () in end bwc this module export function

var a= Number(  prompt("number1 ") );   

var b= Number(  prompt("number2 ") ); 

console.log(a+b); 

// ternary operator
console.log( (6>"5")?6:5   )
console.log( ("9">"5")  )// in string comparison happen on based od unicode
console.log( ("aman">"5")  )

/*
Require prompt sync

If you want to use the prompt-sync package to get user input synchronously in Node.js, you can install it using npm:

Copy code
npm install prompt-sync
Then, you can use it in your code like this:

javascript
Copy code
const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);
This code uses the prompt-sync package to create a synchronous prompt for the user to enter their name. When the user enters their name and 
presses enter, the prompt method returns the entered value, which is then stored in the name variable. Finally, the entered name is displayed 
in the console.

Note that using a synchronous prompt can block the Node.js event loop, so it is generally not recommended for performance reasons. However, it 
can be useful for simple command-line programs or scripts.

I hope this helps! Let me know if you have any further questions.


*/
