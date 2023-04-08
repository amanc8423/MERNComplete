
// promises

let promise = new Promise(function(resolve,reject){

    resolve(56)
});
console.log(promise);




/*

In JavaScript, a promise is an object that represents a value that may not be available yet, but will be resolved eventually. A promise can be in 
one of three states:

Pending: The initial state of a promise before it is resolved or rejected.
Fulfilled: The state of a promise when it has been successfully resolved with a value.
Rejected: The state of a promise when it has been rejected with a reason, such as an error message.
Promises are commonly used in JavaScript for asynchronous operations, such as making HTTP requests or reading and writing files, where the result
 of the operation is not immediately available. With promises, you can write asynchronous code that is more readable and easier to maintain.

Here is an example of how to create and use a promise in JavaScript:

javascript
Copy code
const promise = new Promise((resolve, reject) => {
  // Some asynchronous operation
  const result = 42;
  if (result) {
    resolve(result); // The promise is fulfilled with the result
  } else {
    reject("Error"); // The promise is rejected with an error message
  }
});

promise.then((result) => {
  console.log(result); // The promise was fulfilled, log the result
}).catch((error) => {
  console.error(error); // The promise was rejected, log the error
});
In this example, we create a new promise that represents the result of some asynchronous operation. The resolve function is called if the 
operation is successful, and the reject function is called if there is an error. We then use the then method to handle the fulfilled state of 
the promise, and the catch method to handle the rejected state of the promise.

Promises are a powerful tool in JavaScript that make it easier to write and maintain asynchronous code.
*/