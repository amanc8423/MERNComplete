/*
A cookie is a small piece of data that a website stores on a user's computer mobile device when the user visits the website. Cookies are used to remember user preferences, login information, and other data that can help improve the user experience on a website. Cookies are sent from the website to the user's browser and are stored on the user's device. The next time the user visits the website, the browser sends the cookie back to the website, allowing the website to remember the user's preferences and settings. Cookies can be set and cleared using server-side code, such as with the 
cookie-parser
 module in an Express application.

*/


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());


// Route to set a cookie
app.get('/set-cookie', (req, res) => {
  // Set a cookie with name 'myCookie' and value 'hello'
  res.cookie('myCookie', 'hello');
  res.send('Cookie set!');
});

// Route to clear a cookie
app.get('/clear-cookie', (req, res) => {
  // Clear the cookie with name 'myCookie'
  res.clearCookie('myCookie');
  res.send('Cookie cleared!');
});

// route to show cookie
app.get('/show-cookie', (req, res) => {
    // const cookies = req.cookies;
    // res.send(JSON.stringify(cookies));
const cookies = req.cookies;
res.send(cookies); 
});

// Start the server
app.listen(3300, () => {
  console.log('Server started on port 3300');
});

/*
In this example, we first import the 
express
 and 
cookie-parser
 modules. We then create an instance of the 
express
 application and use the 
cookie-parser
 middleware by calling 
app.use(cookieParser())
.

We then define two routes: 
/set-cookie
 and 
/clear-cookie
. The 
/set-cookie
 route sets a cookie with name 
myCookie
 and value 
hello
 by calling 
res.cookie('myCookie', 'hello')
. The 
/clear-cookie
 route clears the cookie with name 
myCookie
 by calling 
res.clearCookie('myCookie')
.

Finally, we start the server by calling 
app.listen(3000)
 and logging a message to the console.  */