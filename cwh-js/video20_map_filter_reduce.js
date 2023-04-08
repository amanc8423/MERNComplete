var a = [1,3,8,5,6];

console.log(a.map((e,i,a)=> {console.log(e,i,a); return e+=1;})) // map gives new array

console.log(a.filter((e)=> e>3))

console.log(a.reduce((acu,curr)=> acu+=curr,1))

let c = a.map((e)=>e+1).filter((e)=>(e%2 == 0)).reduce((a,e)=>a+=e,5);
console.log(c);
//map vs forEach







