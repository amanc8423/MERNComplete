import React from 'react';
import ReactDOM from 'react-dom/client';


const date = new Date();
const name = "aman";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
<h1>my name is {name}</h1>
  
  { <p>date is = {date.toString()}</p> /* we cant simply write date convert it in string elseerror */}
   <p>date is = {date.toLocaleTimeString()}</p>
   <p>date is = {date.toLocaleDateString()}</p>
  </>
);


// react.dom is no longer supported in 17 and above version therefore use createRoot

 