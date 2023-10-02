c=()=>{
    const date = new Date();
    console.log(date.toLocaleString());
    console.log(date.toLocaleDateString());
   console.log(date.toLocaleTimeString());
   console.log(date.toDateString());
  console.log(date.toTimeString());
}

setTimeout(c,1000);
// setInterval(c,1000);

/*

5/6/2023, 9:10:30 PM
5/6/2023
9:10:30 PM
Sat May 06 2023
21:10:30 GMT+0530 (India Standard Time)        

*/