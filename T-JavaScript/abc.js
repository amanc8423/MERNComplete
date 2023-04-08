const arr=[1,2,3]

Array.prototype.foo=function(){
    console.log(this.length);
}

arr.foo();