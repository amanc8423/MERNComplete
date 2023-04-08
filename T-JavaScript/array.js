const prices = [200,300,"aman",350,400,450,500,600];

//console.log(prices.length);

//for(i in prices){console.log(i);}

//for(i of prices){console.log(i);}

//prices.forEach((e,i,a)=>{console.log(`element is ${e} index is ${i} array is ${a}`);})

//console.log(prices.indexOf(450,6));

//console.log(prices.lastIndexOf(450,3));

//console.log(prices.includes(450,6));

//console.log(prices.find((i)=> i>300));

//console.log(prices.findIndex((i)=> i>300));


// Array.prototype.filter() 🙋‍♂️
// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.
// console.log(prices.filter((e,i,a ) =>  e>300 ));

//console.log(prices.sort());


 //console.log(prices.push("ar")); console.log(prices);

// console.log(prices.pop()); console.log(prices);


//console.log(prices.unshift("ar"));

//console.log(prices.shift());


//console.log(prices.map((e,i,a)=> e>250));
//console.log(prices.map((e,i,a)=> e=e+21)); console.log(prices);


// let a = prices.map((e,i,a)=> e*2).filter((e,i,a)=>e>800).reduce((a,e,i,arr)=>a+=e);
// console.log(a);

// forEach vs Map
// 1. forEach does not return anything map returns new array
// 2. forEach is not chainable because it return undefined whereas map is chainable


//console.log(prices.reduce((a,e)=>a+=e,0));

//flatten an array 







