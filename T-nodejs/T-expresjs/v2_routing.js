//routing

// www.thapa.com - welcomwe to my home age
// /about - welcome to abot
// /contact
// /temp


const express = require('express');
const app = express();
const port = 5050;

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
   res.status(200).send("welcome to about page")
vs     res.send("welcome to about page")

In Express, the res.send() method is used to send a response to an HTTP request made to a server. It can be used to send various types of responses such as plain text, HTML, JSON, etc.

The difference between res.status(200).send("welcome to about page") and res.send("welcome to about page") lies in the status code that is sent with the response.

In the first example, res.status(200).send("welcome to about page"), the res.status() method is used to set the HTTP status code to 200, which means the request was successful. The res.send() method is then used to send the response message "welcome to about page". This is useful when you want to explicitly set the status code of the response.

In the second example, res.send("welcome to about page"), the res.send() method is used to send the response message "welcome to about page". If the status code is not explicitly set using the res.status() method, Express will automatically set the status code to 200, which means the request was successful.

So, the main difference between the two examples is that the first example explicitly sets the status code to 200, while the second example does not. Both examples will send the same response message "welcome to about page", but the first example will include a status code of 200 with the response.




Aman Choudhary
what is status code 200

In HTTP, status code 200 is a success status code that indicates the server has successfully fulfilled the client's request. When a client makes an HTTP request, the server sends a response back to the client, and the response includes a status code to indicate the result of the request.

A status code of 200 means that the server has processed the request, and the response contains the requested information. This status code is often used for GET requests, where the server sends back a representation of the requested resource.

In the context of an Express application, a status code of 200 is often used to indicate that a request was successful. For example, if a user makes a request to view their profile page, the server might respond with a status code of 200 and send back the requested profile information in the response body.

In summary, a status code of 200 means that the server has successfully processed the request and sent back the requested information in the response.




*/









