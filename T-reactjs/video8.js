
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
// inside render we if have to use multiple jsx elements we have to wrap it inside one element
// in React v16 and above its possible for render() to return array of elements so instead of div we can use <></> or [](use it with , b/w elements bec we need comma to separate array elements)
 //
 [

 <h1> aman</h1>,
  <p>hello</p>  


]


,document.getElementById("root") 
);













