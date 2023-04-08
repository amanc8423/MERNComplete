// block also known as compound statement defined by { }

// used to combine multiple javascript statements into one group

// why group ? - we can use them where js needs one statement
// for eg if() it expects one statement so we use block 

// block scope - variable we can access in block



// shadowing
 var a = 10;
 {
    var a =55;
    console.log(a); // here inner 'a' is shadowing outer a
 }

 var b = 55;
 //let b=12;
  {
    let b = 23;
    console.log(b); 
  }

  var c=8;
  //let c = 9;  it will give error






