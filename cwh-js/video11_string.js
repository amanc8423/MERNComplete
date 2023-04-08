let a ="aBcdefghjkla";
let n = ' na\'man'; // length 6 bec \ is escape sequence

let p = new String("ajay");

console.log(a,n,p, `this is ${a}`,n.length)

//template literals 

console.log(a.toUpperCase()); 
console.log(a.toLowerCase()); 
console.log(a.slice(2,4)); 
console.log(a.slice(2));
console.log(a.slice(-3));
console.log(a.slice(2,-2));
console.log(a.replace('a','z'));// it will replace only first occurrence
console.log(a.concat(2,4));
console.log(n.trim());

// strings are immutable
a[0]='t';
console.log(a);


/*String are mutable or not in cpp and js

In C++, strings are mutable, which means that you can modify their contents. You can change individual characters in a C++ string, append or remove characters, and perform various other operations that change the contents of the string.

In JavaScript, however, strings are immutable, which means that their contents cannot be changed once they are created. You can create a new string by concatenating existing strings, but you cannot modify an existing string directly. For example, if you have a string "hello", you cannot change the "h" to a "j" to make it "jello". Instead, you would have to create a new string "jello" by concatenating "j" with "ello".

It's worth noting that in JavaScript, you can modify a string indirectly by using string methods that create a new string based on the original string. For example, the slice() method creates a new substring from a specified part of the original string, and the replace() method creates a new string with one or more occurrences of a specified substring replaced with a different substring. However, the original string itself remains unchanged*/
