// regexr.com

// const text = " ram is very is is good boy is gola is";
// console.log(text.replace("is","are"));
// // it will replace only first occureeence


//way-2
// const regex = /is/g;
// const text = " ram is very is is good boy is gola is";
// console.log(text.replace(regex,"are")); // thiswill replace all


// way-3
const regex = /is/g; // . means word having is
const text = " ram is very is this goisod boy is gola is";
console.log(text.replace(regex,"are"));// . 

















/*

regex in js

In JavaScript, regular expressions (regex) are used to match patterns in strings. Regular expressions are defined using a special syntax that allows you to define a pattern of characters to search for within a string.

To create a regular expression in JavaScript, you can use the RegExp constructor, or you can define the regex pattern directly within forward slashes /.../. For example, the following code creates a regex pattern to match the word "hello" in a string:

javascript
Copy code
const regex = /hello/;
To test if a string matches a regular expression pattern, you can use the test() method of the regular expression object, like this:

javascript
Copy code
const regex = /hello/;
const str = 'hello world';
const result = regex.test(str); // returns true
In addition to the basic syntax for defining regular expressions, JavaScript also provides a variety of special characters and flags that can be used to modify and customize regular expressions. These include:

Special characters:

. : Matches any single character except for a newline
* : Matches the preceding character or expression 0 or more times
+ : Matches the preceding character or expression 1 or more times
? : Makes the preceding character or expression optional
\ : Escapes special characters to be treated literally
[]: Matches any character within the brackets
() : Groups parts of the pattern together
Flags:

g : Global match (matches all occurrences)
i : Case-insensitive match
m : Multi-line match (treats the input as multiple lines)
For example, the following regular expression uses the g flag to match all occurrences of the word "hello" in a string, regardless of case:

javascript
Copy code
const regex = /hello/gi;
const str = 'Hello World, hello universe';
const result = str.match(regex); // returns ['Hello', 'hello']
Regular expressions can be very powerful and flexible tools for working with text data in JavaScript, but they can also be complex and difficult to read and understand. It's important to test and debug regular expressions carefully and to use them only when they are the most appropriate solution for the problem at hand.





*/