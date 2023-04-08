// console object has several methods

console.log(console);
console.error("aman");// see in browser console it will see error in red
console.assert(5>55);
console.assert(5>2);
console.clear(); // it willlclear console or terminal

//"type": "module", if we write it in package.json itwill show error that variable is not defined if it written withou datatype
obj = {
    a:1,
    b:2,
    c:3
}
console.table(obj);
console.table(console);

console.warn("hey dont touch");// in browser it will show warning
console.info("important");

console.time("process");
console.timeEnd("process");

console.time("forLoop");
for(let i =0;i<5;i++){
    console.log(i);
}
console.timeEnd("forLoop");












