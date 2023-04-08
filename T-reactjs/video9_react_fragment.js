
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(

 <> 
 <h1> aman</h1>
  <p>hello</p>  
  </>

// while adding div in console when we see we have on e div with idroot nd we have added another div so it can effect our css
// there we use React.Fragment
,document.getElementById("root") 
);

/*

React.Fragment is a component that allows you to group a list of children without adding an extra node to the DOM. When you render a list of elements using JSX, you are required to wrap them in a single parent element. However, sometimes you may not want to add an extra element to your DOM tree, especially if you are using CSS to style your components.

In such cases, you can use React.Fragment to wrap your list of elements. This way, you can group your elements without adding an extra node to the DOM. Here's an example:

javascript
Copy code
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>World!</p>
    </React.Fragment>
  );
}
In the above example, React.Fragment is used to group the h1 and p elements without adding an extra node to the DOM. Alternatively, you can also use the shorthand syntax of <> and </> instead of React.Fragment:

javascript
Copy code
import React from 'react';

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>World!</p>
    </>
  );
}
This achieves the same result as using React.Fragment, but with a shorter syntax.





*/











