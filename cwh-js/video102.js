

 function a(){

    setTimeout(()=>{console.log("settimeout")},1000);

    let b = new Promise((resolve)=>{console.log("hi"); resolve("resolved");setTimeout(()=>{console.log("yayay");},1000);})

b.then((value)=>{console.log(value)});

}

for(let i=1;i<=1000;i++){console.log(i)}
a();



