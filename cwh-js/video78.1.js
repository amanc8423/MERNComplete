//

class Animal {

    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    Name(name) { 
    this.name =name;
    }
} 
   
  
  let dog = new Dog();
  dog.Name("rex");
  dog.speak(); 
  

























/*
In JavaScript, the extends keyword is used to create a subclass from an existing class. This is known as inheritance, where the subclass inherits properties and methods from the parent class.

Here is an example:

javascript
Copy code
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rex');
dog.speak(); // Output: "Rex barks."
In this example, Dog is a subclass of Animal, and it inherits the name property and speak() method from Animal. The super() method is used to call the constructor of the parent class, which initializes the name property. The speak() method is overridden in the Dog class to make the dog bark instead of making a generic noise.

Overall, the extends keyword allows for easy implementation of inheritance in JavaScript classes.





*/