const add = (a,b) => {
return a+b;
}

  const sub = (a,b) => {return a-b;}

const name = "aman"; // we are not exporting name in case 1

//module.exports = add; // case 1 - we use if we are exporting only one thing

 //module.exports.add1=add;
//module.exports.sub1=sub;  // case 2
 //module.exports.name1=name;



//case3 export all in once

module.exports ={add,sub,name};

// export default mult = (a,b) => {return a-b;}





