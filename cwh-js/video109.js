for(let i=1;i<=2;i++){
    setTimeout(function(){console.log(i)},1000);
}

for(var i=1;i<=2;i++){
    setTimeout(function(){console.log(i)},1000);
}

// if we using var create another function create closure


for(var i=1;i<=2;i++){

    print(i);
}

function print(i){ 
setTimeout(function(){console.log(i)},1000);



}




