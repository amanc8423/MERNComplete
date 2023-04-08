let marks= {
    harry:90,
    aman:50,
    ajay:33
}

for(i in marks)
{ console.log(`marks of ${i} are ${marks[i]}`)   }

// for(i of marks) // error bec obj is not iterble
// { console.log(`marks of ${i} are ${marks[i]}`)   }


for(i of "arjun") 
{ console.log(i);   }
console.log(typeof i); 

for(i in "arjun") 
{ console.log(i);   }

console.log(typeof i); /* i apologize for the confusion in my previous response. You are correct that the typeof i in the for...in loop will return "string" instead of "number".

In JavaScript, the for...in loop iterates over the properties of an object. In the case of a string, each character is considered a property of the string object, and the loop variable i represents the property name, which is a string.

So, if you were to run typeof i within the for...in loop iterating over a string, it would return "string" for each iteration, because i is a string that represents the property name of the character in the string.

Again, I apologize for any confusion my previous response may have caused.  */



