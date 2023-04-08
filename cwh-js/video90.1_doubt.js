//closures


//code-1
// function outer() {
//     let a = 5;
//     function inner() {
//       console.log(a);
//     }
  
//     return inner;
//   }
  
//   let closure = outer();
//   closure(); // output: 5   



//   //code-2
// function outer() {
//   let a = 5;
//   function inner() {
//     console.log(a);
//   }
//   a=10;

//   return inner; // here we are returning a by its references so if we change a it will
// }

// let closure = outer();
// closure(); // output: 10



//case 3

function outer() {
  let a = 5;
  function inner() {
    console.log(a);
  }

  return inner; // here we are returning a by its references so if we change a it will
a=6;
}

let closure = outer();
closure(); // output: 5 // doubt why not 6 it is in lexical environment and inner function willl take refernce of outer block
  
  



  /*
  closures

A closure is a feature of the JavaScript language that allows a function to remember and access variables and functions defined outside of its own scope, even after the outer function has returned or the variables have gone out of scope. In other words, a closure is a function that has access to variables in its parent function's scope, even when the parent function has finished executing.

To create a closure in JavaScript, you define a function inside another function and return the inner function. The inner function has access to the variables and functions in the outer function's scope, even after the outer function has returned.

Here is an example of a closure:

scss
Copy code
function outer() {
  let a = 5;
  function inner() {
    console.log(a);
  }
  return inner;
}

let closure = outer();
closure(); // output: 5
In this example, the outer function defines a variable a and a nested function inner that logs the value of a to the console. The outer function then returns the inner function, which is assigned to the variable closure.

When we call closure(), the inner function executes and logs the value of a, which is 5. Even though the outer function has already returned and its variables are no longer in scope, the inner function still has access to the value of a through closure.

Closures are commonly used in JavaScript for various programming patterns, such as the module pattern, where you use a closure to create private variables and methods, or for handling asynchronous code with callbacks.




Aman Choudhary
so a will be printed 2 times in this

Based on your previous message, I assume you are referring to an example like this:

css
Copy code
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
In this example, var i is declared and initialized to 0 outside of the setTimeout function. During each iteration of the for loop, the value of i 
is incremented by 1 until it reaches 5.

Inside the setTimeout function, the value of i is printed to the console after a delay of 1 second. However, because setTimeout is an asynchronous
 function, the loop has already completed by the time the setTimeout functions execute.

As a result, when the setTimeout functions execute, they all log the final value of i, which is 5, instead of logging the values of i during each
 iteration of the loop.

To log the values of i during each iteration of the loop, you can use a closure to create a new scope for each iteration of the loop, like this:

javascript
Copy code
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}
In this updated example, we use an immediately invoked function expression (IIFE) to create a new scope for each iteration of the loop.
 Inside the IIFE, we pass in the value of i for that iteration, which is stored as the variable j.

The setTimeout function is then executed inside the scope of the IIFE, so each setTimeout function has access to the value of j for that
 iteration of the loop. As a result, the setTimeout functions log the values of j during each iteration of the loop, instead of logging the
  final value of i.




Aman Choudhary
function outer() {
  let a = 5;
  function inner() {
    console.log(a);
  }
  return inner;
}

let closure = outer();
closure(); // output: 5
i am talking about this

In the example you provided, the closure function logs the value of the variable a, which is defined in the outer function outer().

When outer() is called and the inner() function is defined, the inner() function creates a closure over the variable a. This means that the inner() function has access to the value of a even after outer() has finished executing and the variable a would normally be out of scope.

When inner() is returned and assigned to the variable closure, closure becomes a closure that retains access to the value of a. When closure() is called, it executes the inner() function and logs the value of a, which is still accessible due to the closure.

Therefore, when you call closure() after assigning outer() to the variable closure, it logs the value of a, which is 5, to the console.




Aman Choudhary
but inner function is called when we called outer() and it is console.log(a)

You are correct that the inner() function is called when outer() is called in this example. However, the important thing to understand is that the inner() function is not executed until it is invoked, even if it is defined inside another function.

When outer() is called, it defines the a variable and the inner() function, but it does not execute the inner() function. Instead, it returns the inner() function, which is assigned to the variable closure. At this point, the inner() function is not executed yet.

When you later call closure() by invoking closure(), the inner() function is executed and it logs the value of a, which is still accessible due to the closure.

So even though the inner() function is defined inside the outer() function, it is not executed until it is invoked. And when it is invoked, it has access to the variables defined in the outer function's scope, even if the outer function has already returned.




Aman Choudhary
why inner is not invoked

In the example you provided, the inner() function is not invoked directly when outer() is called. Instead, the inner() function is returned from the outer() function and assigned to the variable closure.

When you later call closure() by invoking closure(), the inner() function is executed and it logs the value of the variable a.

So to summarize:

When outer() is called, it defines the a variable and the inner() function, but does not execute the inner() function.
outer() returns the inner() function.
The returned inner() function is assigned to the variable closure.
When closure() is called by invoking closure(), the inner() function is executed and it logs the value of a.
So the inner() function is not invoked directly when outer() is called, but rather is returned and invoked later when closure() is called.




  */





/*  code-2
In the code you provided, outer() defines a variable a and a nested function inner(). Before inner() is returned, the value of a is changed to 10. The returned function inner() has access to a through its closure.

When closure() is called, it executes the inner() function and logs the current value of a, which is 10.

So the output of the code is indeed 10. Even though inner() is defined before the value of a is changed, it still has access to the updated value of a through its closure. This is because inner() has access to the variable a in the context in which it was defined, not in the context in which it was called.

inner will find a in lexical environment becaise it get lexical environments refernces
*/
