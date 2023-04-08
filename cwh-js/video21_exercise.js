const prompt=require("prompt-sync") (); 
chances =0;

while(true){
    let a =  Math. floor(Math. random() * 100) + 1;
     console.log(a);
let c = Number(prompt("Guess the number -> ")); chances++;
if(c==a){console.log(`CONGRATS YOU GUESS WAS CORRECT!!! you guessed it in ${chances} number of chance."`); break;}
else { console.log((c>a)?"number is less than your guess":"number is greater than your guess"  )   }

}
