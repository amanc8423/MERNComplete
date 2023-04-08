
import React from 'react';
import ReactDom from 'react-dom';

const flname = "aman";

ReactDom.render(
// so this is js file in which we are using html like elements that is jsx with help of react module and inside that jsx if we want js then we use { }
 // we can onlu use expression inside { } not staements like if for loop...
 
 <> 
 <h1>my name is {flname} </h1>
  <p>hello my lucky number is {7 * 7 + 5 * 2} {Math.random()}</p> 

{/* erong way -  <p>   {if(3<4) console.log(4);  }</p>  */}
  </>

,document.getElementById("root") 
);

 