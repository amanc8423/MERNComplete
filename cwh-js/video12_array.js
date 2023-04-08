let arr = [1,2,13,"aman","GOL","gol",9," ",false,18];
console.log(arr[4].length);
let f=[11,2,36,55,98,199];

arr[6]=8;
arr[0]=11;// array are mutable
console.log(arr);


let b=String(arr);
console.log(b);
console.log(arr.join("->"));
console.log(arr.pop());// it will return deleted element
console.log(arr.push(5)); // it will return new length
console.log(arr.shift());
console.log(arr.unshift(77));
console.log(arr);

let o=delete arr[0]; // delete is an operator
console.log(o);
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

console.log(arr.concat(arr));
console.log(arr);
console.log(arr.sort());// sort considering elements as string // modifies original array
console.log(arr);

let compare =(a,b)=>{return a-b}
console.log(arr.sort(compare));// sort has compare

console.log(f);
console.log(f.sort());
console.log(f);
const ascending=(a,b)=>a-b;
console.log(f.sort(ascending));

const descending=(a,b)=>b-a;
console.log(f.sort(descending));



/* Sort in array js

Sure! You can sort an array in JavaScript using the built-in sort() method. The sort() method sorts the elements of an array in place and returns the sorted array. By default, the sort() method sorts the array elements as strings in ascending order.

Here's an example of how to use the sort() method:

javascript
Copy code
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort(); // sorts the array as strings in ascending order
console.log(numbers); // outputs [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
To sort the array numerically, you can pass a compare function to the sort() method. The compare function should return a negative value if the first argument is less than the second argument, a positive value if the first argument is greater than the second argument, and zero if the two arguments are equal. Here's an example:

javascript
Copy code
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => a - b); // sorts the array numerically in ascending order
console.log(numbers); // outputs [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
You can also sort the array in descending order by reversing the order of the arguments in the compare function:

javascript
Copy code
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => b - a); // sorts the array numerically in descending order
console.log(numbers); // outputs [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
I hope this helps! Let me know if you have any other questions.*/


/*
Compare function inside sort in javascript array

In JavaScript, the sort() method is used to sort the elements of an array. By default, sort() will sort elements alphabetically or numerically depending on the data type of the values in the array. However, you can also provide a custom comparison function to sort() if you want to specify your own sorting logic.

The syntax for using a custom comparison function in sort() is as follows:

c
Copy code
array.sort(compareFunction)
Here, compareFunction is a function that takes two arguments, representing the two elements being compared, and returns a value indicating their sort order. The function should return a negative number if the first element should be sorted before the second, a positive number if the second element should be sorted before the first, or zero if the two elements are equal in terms of sort order.

For example, let's say you have an array of objects representing people, and you want to sort them by age:

javascript
Copy code
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

// Sort by age using a custom comparison function
people.sort((personA, personB) => personA.age - personB.age);

console.log(people);
// Output: [
//   { name: "Charlie", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ]
In this example, the custom comparison function takes two objects representing people and compares their age properties using subtraction. The resulting sort order is based on the numerical values of the age properties.




Aman Choudhary
Use it in array 

Sure! Here's an example of how you can use a custom comparison function in the sort() method of an array in JavaScript:

Let's say we have an array of numbers and we want to sort them in descending order. Here's how we can do that using a custom comparison function:

css
Copy code
const numbers = [10, 5, 8, 2, 3];

numbers.sort((a, b) => b - a);

console.log(numbers);
// Output: [10, 8, 5, 3, 2]
In this example, we pass a custom comparison function to the sort() method. The function takes two arguments, a and b, which represent the two elements being compared. The function returns b - a, which means that if b is greater than a, the function will return a positive number, which will indicate that b should come before a in the sorted array. If b is equal to or less than a, the function will return a non-positive number, which will indicate that a should come before or at the same position as b in the sorted array.

Note that the sort() method sorts the array in place, which means that the original array is modified. If you want to preserve the original array, you should make a copy of it before sorting.
*/




 