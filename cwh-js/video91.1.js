

// const a = n => console.log(n); 

// a("ajay");


//way 1
// let obj = {
//     name:"aman",
//     sum:function () { console.log(this.name)}
// }
// obj.sum();


//way 2
let obj1 = {
    name:"aman",
    sum:function(){ let that = this; setTimeout(function(){ console.log(that.name)}, 4000)}
}
obj1.sum();


//way3
//way 2
let obj2 = {
    name:"agra",
    sum:function(){  setTimeout(()=>{ console.log(this.name)}, 2000)}
}
obj2.sum();





// this for above is window object
// this - this inside  objects function is that object, alone this is global object,inside event this refer element which receive event

// in use strict this is undefined














