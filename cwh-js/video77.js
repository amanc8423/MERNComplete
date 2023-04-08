//constructor


 class a{
    constructor(){console.log("constructor called");}
}

let b= new a();







/*
In JavaScript, the class keyword is a syntactic sugar over the prototype-based inheritance model. It allows you to define a blueprint for creating objects using a more familiar class-based syntax.

Inside a class declaration, you can define a constructor method using the constructor keyword. This method is called when a new instance of the class is created and is used to initialize the object's properties.

Here is an example of a class declaration that defines a Person class:

javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let john = new Person("John", 30);
console.log(john.name); // output: "John"
console.log(john.age); // output: 30
john.greet(); // output: "Hello, my name is John"
In this example, the Person class has a constructor method that takes name and age parameters and initializes the object's name and age properties. The class also has a greet method that logs a message to the console using the object's name property.

You can also define other methods and properties inside a class declaration, which will be shared among all instances of the class.

javascript
Copy code
class Person {
  static species = "Homo sapiens";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  static printSpecies() {
    console.log(`This is a ${Person.species}`);
  }
}

let john = new Person("John", 30);
console.log(john.name); // output: "John"
console.log(john.age); // output: 30
john.greet(); // output: "Hello, my name is John"

Person.printSpecies(); // output: "This is a Homo sapiens"
In this example, we have defined a static property species and a static method printSpecies inside the Person class. The static keyword is used to define properties and methods that belong to the class itself, rather than to instances of the class.

So, you can use static properties and methods on the class itself, but not on the instances of the class.






*/ 






/*In JavaScript, a constructor is a function that is used to create and initialize an object. It is typically used in conjunction with the new keyword to create a new instance of an object.

Here is an example of a constructor function that creates a Person object:

javascript
Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var john = new Person("John", 30);
console.log(john.name); // output: "John"
console.log(john.age); // output: 30
In this example, the Person constructor takes two arguments, name and age, and sets them as properties on the newly created Person object using the this keyword.

When we create a new Person object using the new keyword, the constructor function is executed, and a new object is created with the name and age properties set as specified.

Constructors can also be used to define methods on an object's prototype. For example:

javascript
Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

var john = new Person("John", 30);
john.greet(); // output: "Hello, my name is John"
In this example, we add a greet method to the Person constructor's prototype, which can be accessed by any Person object created using the constructor.



*/ 