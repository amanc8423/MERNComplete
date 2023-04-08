//var React = require('react'); // but in modern we use import bec while installing react we also get webpack and babel which is modern  javascript compiler which translate modern js into browser understanding js

import React from 'react';
///var ReactDom = require('react-dom');
import ReactDom from 'react-dom';


//ReactDom.render('what to show','where to show','callback func')
// we use reactdom for dom inside react , hor html like elemetns we need react
// we shoe inside html root 
ReactDom.render(<h1> aman</h1>,document.getElementById("root") );
/* the above code look like this to browser which is converted by babel -
ReactDom.render(  _jsx("h1", {
  children: " aman"
}), document.getElementById("root"));

*/

/// jsx - h1 tag above is not part of html but jsx (js extension).
// above we have import react module to use jsx 
// in babel script will change above code to look diffferent to our browser, jsx make it easy to use and read 


 /*  //old method other than render //  with simple js if we have to write it then-
var h1 = document.createElement("h1");
h1.innerHTML= "this is aman";
document.getElementById("root").appendChild(h1); */



/*
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It's commonly used in React, a popular JavaScript library for building user interfaces.

JSX allows you to define components, which are like reusable blocks of UI elements, in a way that's easy to read and write. For example, here's a simple JSX component that renders a heading:

jsx
Copy code
function Heading(props) {
  return <h1>{props.text}</h1>;
}

ReactDOM.render(<Heading text="Hello, world!" />, document.getElementById('root'));
In this example, we define a Heading component that takes a text prop and renders it inside an h1 tag. We then use the ReactDOM.render method to render the component to the DOM, passing in a text prop of "Hello, world!".

JSX is not a separate language, but rather a syntactic sugar on top of JavaScript. When you write JSX code, it gets transpiled into regular JavaScript code that can be interpreted by a browser or a JavaScript engine.
*/ 





/*
Babel is a JavaScript compiler that converts modern JavaScript code (ES6/ES2015 and newer) into code that can run in older browsers and environments that do not support these newer features.

React is a JavaScript library used for building user interfaces, and it relies heavily on modern JavaScript features like arrow functions, template literals, and destructuring. As a result, React code written in ES6/ES2015 and newer may not work in older browsers and environments.

Babel can be used to transpile React code written in modern JavaScript into code that can run in older browsers and environments, making it a useful tool in the React development process.

Additionally, Babel can also be configured to enable developers to use experimental features that are not yet part of the official JavaScript standard. This allows developers to experiment with new features and provide feedback to the JavaScript community, without the risk of breaking their production code.

In summary, Babel is an important tool in the React development process as it allows developers to write modern JavaScript code for React and transpile it into code that can run in older browsers and environments.

*/








