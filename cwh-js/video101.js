function outer(){
    let a = 5;
      function inner(){
console.log(a);
    }
    //a=8;
    return inner;
    a=88;
} 


let a = outer();
a();

