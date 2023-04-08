//spread syntax
//mdn for more

let a =  [1,2,3 ];
let b = {...a};
console.log(a);
console.log(...a);
console.log(b);


let obj = {name:"aman",class:"ug"}
console.log({...obj,name: "ajay"})// in this we are overwriting obj so it must be written first
console.log({...obj})

















/*
In JavaScript, the term "spread parameter" typically refers to the spread syntax, which is denoted by three dots ( ... ) and is used to expand an array or object into individual elements.

For example, consider the following code snippet that defines an array of numbers and uses the spread syntax to pass the elements as arguments to a function:

javascript
Copy code
let numbers = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
let result = sum(...numbers);
console.log(result); // output: 15
In this example, the spread syntax is used to "spread" the elements of the numbers array into the parameters of the sum function, which expects five arguments. The spread syntax makes it easier to pass multiple arguments without having to explicitly list each one.

The spread syntax can also be used to create a new array by combining existing arrays. For example:

javascript
Copy code
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
console.log(newArr); // output: [1, 2, 3, 4, 5, 6]
In this example, the spread syntax is used to concatenate the elements of arr1 and arr2 into a new array newArr.




*/