// see mdn for more
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters


let arr=[1,15,65];

let[a,b,c,d=44]=arr;


let arr1=[1,15,65,5,6,8,22,58];

let[a1,b1,c1,,...rest]=arr1;
console.log(a1,b1,c1,rest);

 let g ={name:"aman", class:"ug"};
 let {name:p,class:q} = g;
console.log(p,q);


let g1 ={na:"aman", cl:"ug"};
let {na,cl} = g1;
console.log(na,cl);



/*
The rest operator in JavaScript is represented by three dots (...) followed by a variable name. It allows you to represent an indefinite number of arguments as an array.

The rest operator is often used in function definitions to capture any number of additional arguments passed to the function. Here's an example:

javascript
Copy code
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20)); // Output: 30
In this example, the sum function uses the rest operator to capture any number of arguments passed to it and stores them in an array called numbers. The function then uses the reduce method to add up all the numbers in the array and return the total sum.

The rest operator can also be used in destructuring assignments to capture the remaining elements of an array. Here's an example:

javascript
Copy code
const [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: [3, 4, 5]
In this example, the first two elements of the array (1 and 2) are assigned to the variables a and b, respectively. The rest of the elements of the array (3, 4, and 5) are captured using the rest operator and assigned to the array rest.




*/ 


/*
A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.

function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
*/ 


