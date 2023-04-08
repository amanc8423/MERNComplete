// console.log(55);
// document.write(58);

//import * as random from 'random';

//const random = require('random');


do{ 
//var d = random.choice(["snake","water","gun"]);
let a =  Math. floor(Math. random() * 100) + 1;

var d;
if(a<=33){d="snake";}
else if(a>=33 && a<=66){d="water";}
else {d="gun";}

var b = prompt("TYPE-> 1 for SNAKE | 2 for WATER | 53 FOR GUN");


if(b==1){
    if(d=="snake"){alert("DRAW SNAKE ON SNAKE ");}
    else if(d=="water"){alert("WINNER!! SNAKE ON WATER ");}
    else if(d=="gun"){alert("LOSER!! SNAKE ON GUN ");}
}

else if(b==2){
    if(d=="water"){alert("DRAW WATER ON WATER ");}
    else if(d=="gun"){alert("WINNER!! WATER ON GUN ");}
    else if(d=="snake"){alert("LOSER!! WATER ON SNAKE ");}
}

else if(b==3){
    if(d=="gun"){alert("DRAW GUN ON GUN ");}
    else if(d=="snake"){alert("WINNER!! GUN ON SNAKE ");}
    else if(d=="water"){alert("LOSER!! GUN ON WATER ");}
}

else{ alert("PLEASE CHOOSE FROM 1 2 3 ONLY")}

var c = confirm("DO YOU WANT TO PLAY AGAIN?")


}while(c);



