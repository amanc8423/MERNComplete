// before es6(2015) only var was there but after we have let and const

// var - reinitialized and redclared, function scope
// let -  reinitialized but not redclared, block scope
// const - not reinitialized and not redclared, block scope and it has to be initialized during timeof dec;aration

var a=5;
var a = 6;

let b=6;

//let b=8; can not redeclraed will give error if

b=9; // can be reinitialized

const c=5;
//const c=8; can not redclared
// c=9; //can not reinitialized 

//console.log(c);


var d = 8; // function scope

let e= 9; // block scope

const f=5; // block scope
if(5){
    var d = 80;

    let e= 94;
    
    const f=58;

    console.log(d);
    console.log(e);
    console.log(f);
}

console.log(d);
console.log(e);
console.log(f);

function s(){
    var d = 110;

    let e= 14;
    
    const f=22;

    console.log(d);
    console.log(e);
    console.log(f);
}

s();

console.log(d); // var will also not change bec var d=110 has function scope
console.log(e);
console.log(f);





