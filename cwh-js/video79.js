//

class Animal {
    constructor(name){
        this.name = name;
    }
    
    c(){console.log("super")}
        speak() {
          console.log(`${this.name} makes a noise.`);
        }
      }
      
      class Dog extends Animal {
        bark() { 
        console.log(`${this.name} barks`)
        }

        speak() {
            super.speak();
            super.c();
            console.log(`${this.name} speaks`);
          }
    } 
       
      
      let dog = new Dog('rex');
      let cat = new Animal('cat');
      
      dog.speak();//method overridng
      cat.speak(); 
      

    /*
    In a class definition, you cannot declare variables using the let keyword outside of a method or a constructor. This is because the let keyword is used to declare block-scoped variables, and a class definition is not a block.

However, you can declare variables using the let keyword inside a method or a constructor, and these variables will have block scope within that method or constructor. Here's an example:

javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    let message = `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    console.log(message);
  }
}

let person = new Person('John', 30);
person.greet(); // Output: "Hi, my name is John and I'm 30 years old."
In this example, we've declared a variable message using the let keyword inside the greet() method of the Person class. This variable has block scope within the method, and it contains a string that includes the name and age properties of the current Person instance.

When we call the greet() method on the person instance, it outputs the message to the console.

So to summarize, you can declare variables using the let keyword inside a method or a constructor of a class, but not outside of them.




    */   
    


