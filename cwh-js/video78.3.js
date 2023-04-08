class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    // constructor(name) {
    //   super(name);
    // }
    // if not written automatically written
    // but even if has its own constructor define then also super constructor is necessary
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  let dog = new Dog('Rex');
  dog.speak(); // Output: "Rex barks."
  