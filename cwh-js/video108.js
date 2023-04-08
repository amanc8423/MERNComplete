
// execution context - everything in js happens in execution context
// e.c. is like big box it has two components first is memory where key vlaues are stored and fucntions as well it is alsoknow as memory environment
//second is code component wheere eecution happens it is also know as thread of execution
// js is synchronous ,single threadded language


var a = 5;

{
    var a=10;
    {
console.log(a);
    }
    a=5;
}

// node --inspect-brk .js
// nodemon --inspect-brk .js