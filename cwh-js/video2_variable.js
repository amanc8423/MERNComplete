// // js is dynamic type

// There are two main differences between dynamic typing and static typing that you should be aware of when writing transformation scripts.

// First, dynamically-typed languages perform type checking at runtime, while statically typed languages perform type checking at compile time. This means that scripts written in dynamically-typed languages (like Groovy) can compile even if they contain errors that will prevent the script from running properly (if at all). If a script written in a statically-typed language (such as Java) contains errors, it will fail to compile until the errors have been fixed.

// Second, statically-typed languages require you to declare the data types of your variables before you use them, while dynamically-typed languages do not


let a;
a=55;
//const b;// error bec we have to initialized const along declaration
let b;
c=555;

console.log(typeof a);
console.log(typeof b);
console.log(c);
/* Type checking is the process of verifying and enforcing constraints of types in values. A compiler must check that the source program should follow the syntactic and semantic conventions of the source language and it should also check the type rules of the language. It allows the programmer to limit what types may be used in certain circumstances and assigns types to values. The type-checker determines whether these values are used appropriately or not.*/

