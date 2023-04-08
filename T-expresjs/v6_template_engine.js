// template engine - we use them to play with dynamc eg - pugs,handlebars
// install npm i hbs
const express = require('express');
const app = express();
const port = 6050;
const path =require('path');

app.use(express.static(path.join(__dirname,"/views"))); 

// first we have to set view engine
app.set("view engine","hbs");


app.get('/',(req,res)=>{
    res.render("index") // we use render for file and it is top therefore it has high priority 
});

app.get('/',(req,res)=>{
    res.send("welcome to home page")
});

app.get('/about',(req,res)=>{
    res.status(200).send("welcome to about page")

});

app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
});

app.get('/temp',(req,res)=>{
    res.send("welcome to temp page")
});

app.listen(port);










/*
A template engine is a tool that helps you generate dynamic HTML pages by combining static HTML with dynamic data. In the context of the Express framework for Node.js, there are several popular template engines that you can use, such as:

EJS (Embedded JavaScript): EJS is a simple templating language that lets you embed JavaScript code in your HTML pages. To use EJS with Express, you need to install the ejs package and set the view engine and views properties in your application:
c
Copy code
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
Then you can create EJS templates in the views directory and render them using the render method:

javascript
Copy code
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
Handlebars: Handlebars is a popular templating language that lets you define variables and partials in your templates. To use Handlebars with Express, you need to install the express-handlebars package and configure it in your application:
javascript
Copy code
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
Then you can create Handlebars templates in the views directory and render them using the render method:

javascript
Copy code
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
Pug (formerly Jade): Pug is a high-performance templating engine that uses indentation and concise syntax to create HTML templates. To use Pug with Express, you need to install the pug package and set the view engine and views properties in your application:
c
Copy code
const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
Then you can create Pug templates in the views directory and render them using the render method:

javascript
Copy code
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
These are just a few examples of the many template engines available for use with Express. You can choose the one that best fits your needs and preferences.




*/























