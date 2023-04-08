var a ="i am aman i am in lpu";
// console.log(a.search(""));
// console.log(a.indexOf(""));
// console.log(a.indexOf("a",15));
// console.log(a.search("ama"));
// console.log(a.search("ad"));
// console.log(a.search("a",10)); // serch have only one argument
 
console.log(a.slice(0,3));
console.log(a.slice(1));
console.log(a.slice(-5));
console.log(a.slice(0,-2));


//substring cant accept negative index
// console.log(a.substring(0,3));
// console.log(a.substring(1));
// console.log(a.substring(-5));
// console.log(a.substring(4,-2)); // it will ignore -2 and it will print 0 to 3

//second parameter in substr is length of extracted part
// console.log(a.substr(0,3));
// console.log(a.substr(1));
// console.log(a.substr(4,-2)); // no result for this
// console.log(a.substr(-2));

// console.log(a.charCodeAt(2));
// split for strig to array

// let myName = "vinod tHapa";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());

// var txt = "abcde";  
// console.log(txt.split(""));  


// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// const message = "abcdefg";
// console.log(message);
// console.log(message.padStart(10,"*")); // if second argument is not passed blank space is by default
// console.log(message.padEnd(10,'*'));
 


// let person = { name: 'John', age: 30, city: 'New York' };

// const values = Object.values(person);

// console.log(values); // Output: [ 'John', 30, 'New York' ]


//  person = { name: 'John', age: 30, city: 'New York' };

// const entries = Object.entries(person);

// console.log(entries); // Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
