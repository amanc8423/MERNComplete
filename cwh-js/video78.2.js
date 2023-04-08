//

class Animal {
constructor(name){
    this.name = name;
}
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    bark() { 
    console.log(`${this.name} barks`)
    }
} 
   
  
  let dog = new Dog('rex');
  
  dog.speak(); 
  dog.bark();


/*
is constructor automaticaly called if not defined

Yes, the constructor is automatically called when a new instance of a class is created, even if the constructor is not defined explicitly in the class.

If a class does not have a constructor, JavaScript creates a default constructor for the class. This default constructor takes no parameters and simply initializes the instance properties to their default values (which are undefined for object properties).

Here's an example of a class without a constructor:

javascript
Copy code
class Example {
  message = 'Hello';
  count = 0;
}

let ex = new Example();
console.log(ex.message); // Output: "Hello"
console.log(ex.count); // Output: 0
In this example, the Example class does not have a constructor defined, but JavaScript creates a default constructor for the class. The message and count properties are initialized to their default values of 'Hello' and 0, respectively.

So when you create a new instance of the Example class with let ex = new Example();, the default constructor is called automatically, initializing the properties to their default values.




Aman Choudhary
if i pass "aman" in example will it show error

In the example code I provided, if you try to pass an argument to the constructor when creating a new instance of the Example class, it will cause an error because the class does not have a constructor that takes any arguments.

Here's an example:

csharp
Copy code
class Example {
  message = 'Hello';
  count = 0;
}

let ex = new Example('aman'); // Error: Example is not a constructor
In this example, we're trying to create a new instance of the Example class with the argument 'aman'. However, since the Example class does not have a constructor that takes any arguments, this will result in an error: "Error: Example is not a constructor".

If you want to be able to pass an argument to the Example class constructor, you need to define a constructor that takes a parameter. For example:

javascript
Copy code
class Example {
  constructor(name) {
    this.message = `Hello, ${name}`;
    this.count = 0;
  }
}

let ex = new Example('Aman');
console.log(ex.message); // Output: "Hello, Aman"
console.log(ex.count); // Output: 0
In this example, we've defined a constructor for the Example class that takes a name parameter. The constructor sets the message property to "Hello, ${name}", and the count property to 0. Now when we create a new instance of the Example class with new Example('Aman'), the constructor is called with the 'Aman' argument, and the message property is set to "Hello, Aman".




*/   