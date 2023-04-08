// console.log(window); error here but in browser will show its method

// window is global object

// window.console.log(5); both are same
// console.log(555);


// window object is a global object that means its methods and variables can be accessed from anywhere in our code it represents the browser
// window or frame that contain our web page , it has three parts 1 dom(document object model)-dom defines our web page as a tree of objects
// using its property we can manipulate our web page using javascript,
// bom (browser object model) contains windows method which are not part of dom like alert,prompt,confirm,setinterval etc. to modify our web page
 
/*
Sure! Here's an overview of the Window object, the Document Object Model (DOM), and the Browser Object Model (BOM) in JavaScript:

Window Object: The Window object represents the browser window or frame that contains a web page. It is the global object in client-side 
JavaScript, which means that all other objects and variables in the browser environment are properties and methods of the Window object. 
The Window object provides a number of built-in properties and methods for interacting with the browser window and its contents, such as 
window.location for accessing the URL of the current page, window.alert() for displaying an alert dialog, and window.setTimeout() for scheduling 
a function to be executed after a certain delay.

Document Object Model (DOM): The DOM is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree 
of objects, with each object representing an element, attribute, or piece of text in the document. The DOM provides a way to access and manipulate 
the content and structure of a web page using JavaScript. For example, you can use the document.getElementById() method to get a reference to an 
HTML element on the page, and then use its properties and methods to change its content or appearance.

Browser Object Model (BOM): The BOM is a collection of objects and methods provided by the browser that are not part of the standard JavaScript 
language or the DOM. It includes objects such as window.navigator for obtaining information about the browser and the client's operating system,
 window.history for manipulating the browser's history, and window.screen for obtaining information about the user's screen size and resolution.
  The BOM provides a way to interact with the browser and the user's environment using JavaScript.

In terms of their connections, the Window object is the top-level object in the browser's JavaScript environment, and it contains references to 
the Document object and the BOM objects. The Document object represents the web page that is loaded in the window, and it is a property of the 
Window object. The BOM objects are also properties of the Window object, and they provide additional functionality for interacting with the 
browser and the user's environment. Together, these objects and their methods and properties allow JavaScript to interact with and manipulate
 the content and behavior of web pages in a dynamic and interactive way.

*/
/*
In JavaScript, the global object is an object that is available in the global scope of a JavaScript program. In a web browser environment, the 
global object is the window object, which is the top-level object in the browser's JavaScript environment.

The global object provides a number of built-in properties and methods that are available to all parts of a JavaScript program, including:

setTimeout() and setInterval(), for scheduling code to be executed at a later time
console, for logging messages to the browser console
Math, for mathematical operations
JSON, for parsing and serializing JSON data
Object, Array, and other built-in objects and constructors
You can also define your own properties and methods on the global object by assigning them directly to the window object (in a web browser 
    environment) or to the global object (in a Node.js environment).

It's worth noting that using the global object to store global state or to define global functions can lead to naming conflicts and other issues, 
especially in larger programs or when multiple third-party libraries are used. It's generally considered better practice to use a module system 
or a namespace pattern to organize your code and avoid polluting the global scope.




*/


