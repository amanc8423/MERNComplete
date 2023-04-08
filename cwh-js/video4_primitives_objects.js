// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// 1 - 7 are primitive Datatypes
// 8 non-primitive datatype

// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// nn bb ss u

let p=999999999999999999n;
let d = BigInt("555")
console.log(p,d);


/*
    In JavaScript, objects can exist without being defined using a class. Objects can be created directly using object literals, or they can be 
    created from constructor functions, which are functions that are designed to create and initialize objects.

Here's an example of creating an object directly using an object literal:

arduino
Copy code
const myObject = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};
In this example, myObject is an object that was created using an object literal, which is simply a set of key-value pairs enclosed in curly braces.

Another way to create objects in JavaScript is to use constructor functions. Constructor functions are functions that are designed to be called
 with the new keyword, and they typically create and initialize an object with a specific set of properties and methods.

Here's an example of a constructor function that creates a Person object:

javascript
Copy code
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

const myPerson = new Person("John", 30, "Engineer");
In this example, myPerson is an object that was created by calling the Person constructor function with the new keyword. The constructor function 
initializes the object with the specified properties.

So to summarize, objects can be created in JavaScript using object literals or constructor functions, and do not necessarily need to be defined
 using a class. Classes were introduced in ES6 to provide a more structured and standardized way to create objects, but they are not the only 
 way to create objects in JavaScript.

    })
*/ 