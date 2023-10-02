a = setInterval(()=>{console.log("a")},1000);
setTimeout(()=>{clearTimeout(a)},5000);


console.log('before immediate');

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate');

console.log("watch below");

c=()=>{
    const date = new Date();
    console.log(date);
}

setTimeout(c,1000);
