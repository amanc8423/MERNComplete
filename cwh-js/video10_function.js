// function is block of code design to perform a particular task

 let mark ={
    aman:52,
    adi:60,
    ajay:80,
    nee:5
 }

 for(let i=0; i<Object.keys(mark).length;i++){
    console.log(Object.keys(mark)[i] , mark[Object.keys(mark)[i]])
 }

 for(let key in mark){
console.log(key,mark[key])
 }




