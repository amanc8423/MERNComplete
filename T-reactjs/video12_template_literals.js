
import React from 'react';
import ReactDom from 'react-dom';

const fname = "aman";
const lname = "ajay";


ReactDom.render(

 <> 
 <h1>my name is {fname} {lname} </h1>
 <h1>my name is {fname + lname} </h1>
 <h1>my name is {`my name is ${fname} ${lname}`}  </h1>
  
  </>

,document.getElementById("root") 
);

 