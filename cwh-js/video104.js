// lexical scoping
// scope - where we can access variale, scope directly depends on lexical environment
//lexical enviorment is the local memory along with the lexical environment of its parent
// lexical term mean hierarchy or in order

//Lets try the shortest possible definition:

//Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.

function a(){
    console.log(b);
}

{
    console.log(b);
}

console.log(b);
var b = 10;
a();


/*The lexical scope allows a function scope to access statically the variables from the outer scopes. Finally, a closure is a function that captures variables from its lexical scope. In simple words, the closure remembers the variables from the place where it is defined, no matter where it is executed.*/



/*lexical scoping

Lexical scoping is a mechanism used in programming languages to determine how variables in nested functions are resolved. In a language with lexical scoping, variables declared in a function are available to nested functions that are defined within it.

Lexical scoping, also known as static scoping, works by creating a "scope chain" for each function that is defined. This scope chain consists of the variables declared in the function itself, as well as any variables declared in any parent functions. When a variable is referenced in a nested function, the language first looks for the variable in the current function's scope chain, and then works its way up the chain until it finds the variable or reaches the global scope.

One advantage of lexical scoping is that it allows for more efficient code execution, since the language doesn't have to search through all the variables in a program to find a particular one. Additionally, lexical scoping can help prevent naming conflicts between variables in nested functions, since each function has its own scope.

Most modern programming languages, including JavaScript, Python, and Ruby, use lexical scoping.*/


/* lexical scoping vs closure

Lexical scoping and closures are related concepts in programming, but they are not the same thing.

Lexical scoping refers to the way a programming language determines how variables are resolved in nested functions. In a language with lexical scoping, variables declared in a function are available to nested functions that are defined within it, as long as those functions are defined within the same lexical scope.

A closure, on the other hand, is a function that has access to variables in its outer (enclosing) function's scope, even after that outer function has returned. Closures are created when a function returns another function that references variables in its parent scope.

Closures are often used in functional programming to create "private" variables or to create functions with specific behavior that depends on variables in their enclosing scope. They can be a powerful tool for creating modular and reusable code.

While closures are closely related to lexical scoping, not all languages with lexical scoping support closures, and not all closures require lexical scoping. For example, some languages allow for closures to be created dynamically at runtime, without relying on a specific lexical scope.*/






















