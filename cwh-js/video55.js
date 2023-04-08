let p = new Promise((resolve)=>{
    setTimeout(()=>{resolve("promise-resolved")},3000)
})
let f=(s)=>{console.log(s)};

p.then(f);




let p1 = new Promise((reject)=>{
    setTimeout(()=>{reject("promise-rejected")},3000)
})
p1.then((value)=>{console.log(value)},(error)=>{console.log(error)});
// another way of writing if we dont watch catch if not error first function otherwise second will exceute

console.log(p,p1);











