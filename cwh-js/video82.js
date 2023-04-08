
class Animal{
    constructor(name){
        this._name =name;
    }

    fly(){
        console.log("flyyy");
    }
get name(){
    return this._name
}

set name(newName){
     this._name = newName;
}

}

let a = new Animal("cat");
a.fly();
console.log(a.name);

a.name="dog";
console.log(a.name);

console.log(a instanceof Animal);// even if a belong to pranet class

let c = 88;

console.log(c instanceof Animal);




/*
getter setter in js

In JavaScript, getters and setters are functions that allow you to control access to an object's properties. Getters are used to retrieve the value of a property, while setters are used to set the value of a property.

Here's an example of using getters and setters in a class:

javascript
Copy code
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;
  }
}

let person = new Person('John');
console.log(person.name); // output: JOHN
person.name = 'Jane';
console.log(person.name); // output: JANE
In this example, the "Person" class has a constructor method that takes a "name" argument and assigns it to a private property called "_name" using the "this" keyword. The class also has a getter and a setter for the "name" property.

The getter returns the value of the "_name" property in uppercase letters, while the setter sets the value of the "_name" property to the value of the argument passed in.

When we create a new instance of the "Person" class and pass in the string 'John', the constructor method sets the "_name" property to 'John'. When we access the "name" property of the "person" object using the getter, it returns the value of "_name" in uppercase letters ('JOHN'). When we set the "name" property of the "person" object using the setter and the value 'Jane', the setter sets the value of "_name" to 'Jane'. When we access the "name" property again using the getter, it returns the new value of "_name" in uppercase letters ('JANE').

Getters and setters are useful for controlling access to object properties and enforcing business rules, such as data validation, authorization, or logging. By using getters and setters, you can prevent accidental modification of an object's properties, or ensure that changes to an object's properties are performed in a controlled way.





*/




/*
The underscore prefix before the "name" property (i.e., "_name") is a common convention in JavaScript to indicate that the property is intended to be private, meaning that it should not be accessed or modified directly outside the class.

JavaScript does not have built-in support for private properties or methods in classes, but the convention of using an underscore prefix is widely recognized and respected by developers as a way to signal that a property or method is intended to be private.

In the example provided, the use of "_name" with a leading underscore signals that it is intended to be a private property of the "Person" class, which should not be accessed directly outside of the class. Instead, the property is accessed through the public getter and setter methods, which provide a controlled interface for accessing and modifying the property.




*/