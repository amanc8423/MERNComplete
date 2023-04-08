
function outer() {
    var a = 1;
    function inner() {
      var b = 2;
      console.log(a + b);
    }
    a=5;
    inner();   // first a will search in its scope than outer sope and i that a is updated  because it will get a refernce
  }
  outer();
  




















/*
Lexical scoping

Lexical scoping is a feature of programming languages that determines how variables and identifiers are resolved at compile time. In languages with lexical scoping, the scope of a variable is determined by its location in the source code (i.e., its lexical context) rather than by the runtime flow of the program.

In other words, when you reference a variable in a nested function or block, the interpreter or compiler looks for the variable's value in the closest surrounding lexical scope. If the variable is not found there, the interpreter or compiler looks in the next outer lexical scope, and so on, until the variable is found or the global scope is reached.

Consider the following example code:

javascript
Copy code
function outer() {
  var a = 1;
  function inner() {
    var b = 2;
    console.log(a + b);
  }
  inner();
}
outer();
In this example, a is defined in the outer function outer(), and b is defined in the inner function inner(). When inner() is executed, it has access to both a and b because a is in the outer scope and b is in the local scope of inner(). When outer() is executed, it calls inner(), which logs the value of a + b to the console.

Because JavaScript has lexical scoping, the inner() function can access the a variable defined in its outer function, even though a is not defined in the scope of inner().

Lexical scoping can be a powerful feature that allows for more flexible and modular code. It also helps prevent naming conflicts by limiting the scope of variables to their intended contexts.
*/