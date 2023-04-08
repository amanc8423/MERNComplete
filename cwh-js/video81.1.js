
//static methods

class Animal {
    constructor(name){
this.name=Animal.capitalize(name);
console.log(this.name);
    }

    static capitalize(name){
return name.toUpperCase();
    }
} 


j = new Animal("cat");
k = new Animal(Animal.capitalize("dog"));
l = new Animal("deer");
p=Animal.capitalize("lion");

console.log(p);










/*
In JavaScript, variables declared inside a class outside of methods or constructors are actually considered as static class variables, also known as class properties or static fields. Static variables are shared among all instances of the class, and they are not associated with any specific instance of the class.

For example, consider the following code:

javascript
Copy code
class Person {
  static count = 0;
  constructor(name) {
    this.name = name;
    Person.count++;
  }
}

let person1 = new Person('John');
let person2 = new Person('Mary');

console.log(Person.count); // Output: 2
In this code, we've defined a static variable count inside the Person class, outside of any method or constructor. This variable is shared among all instances of the Person class, and it's incremented every time a new instance is created.

When we create two Person instances (person1 and person2), the count variable is incremented twice. When we log the value of Person.count to the console, it outputs 2, which is the total number of instances that have been created.

So to answer your question, you can have independent variables inside a class in JavaScript, but they will be treated as static variables that are shared among all instances of the class. If you want instance-specific variables, you should declare them inside the constructor or a method, using the this keyword to associate them with the current instance.




Aman Choudhary
can i console john.count outside class

No, you cannot access a static variable (also known as class property or static field) outside the class using an instance of the class in JavaScript.

Static variables are associated with the class itself, not with individual instances of the class. Therefore, you need to use the class name to access the static variable outside the class.

For example, in the following code:

javascript
Copy code
class Person {
  static count = 0;
  constructor(name) {
    this.name = name;
    Person.count++;
  }
}

let john = new Person('John');
console.log(john.count); // Output: undefined
console.log(Person.count); // Output: 1
We cannot access the count static variable using the john instance, because static variables are not associated with individual instances. The first console.log statement outputs undefined.

Instead, we need to use the class name Person to access the count static variable outside the class. The second console.log statement outputs 1, which is the current value of the static variable.




*/









/*
In JavaScript, static methods are functions that are defined on the class itself rather than on its instances. They can be accessed without creating an object of the class, and they are typically used for operations that don't require access to instance-specific data.

To define a static method in JavaScript, you can use the "static" keyword within the class definition. Here's an example:

javascript
Copy code
class MyClass {
  static myStaticMethod() {
    console.log('This is a static method.');
  }
}
In this example, the "myStaticMethod" function is a static method of the MyClass class. To call the static method, you can use the class name followed by the method name:

scss
Copy code
MyClass.myStaticMethod(); // output: This is a static method.
Note that static methods cannot access instance-specific data or methods directly, as they are not associated with any particular instance of the class. If you need to access instance-specific data or methods within a static method, you can pass them in as arguments. For example:

javascript
Copy code
class MyClass {
  static myStaticMethod(myInstance) {
    console.log(`This is ${myInstance.name}.`);
  }
}

const myObj = new MyClass();
myObj.name = 'my object';

MyClass.myStaticMethod(myObj); // output: This is my object.

*/

