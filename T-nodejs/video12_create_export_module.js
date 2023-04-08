// in nodejs every individual file is module and their scope is private we can use in another module or file

 //const a = require('./video12.1'); // when we use built-in module like os,path we dont need filepath but when we create we nedd to assign file 
//path that why we are using ./ it will tell nodejs to check file in current directory and for why we not writing .js behind go to 
//learn.js pt. 4                

 //console.log(a(5,7)); if we importing only one method


  const a = require('./video12.1');
//  console.log(a.add1(5,5));
//  console.log(a.sub(5,5));  
//  console.log(a.name1);


// case 2 we can use object destructuring then no need to write a.

 //const {add1,sub1,name1} = require('./video12.1');

// //console.log(a);
 //console.log(add1(5,5));
// console.log(sub1(5,5));
//console.log(name1);



//case3
const {add,sub,name} = require('./video12.1');

//console.log(a);
console.log(add(5,5));
//console.log(sub(5,5));
//console.log(name);









