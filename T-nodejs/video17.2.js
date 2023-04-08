const http = require('http');
const https = require('https');

let server = http.createServer((req, res) => {
  https.get('https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/', (response) => {
    response.pipe(res);
  });
});

server.listen(3000,()=>{console.log("server on")});



/*HTTP and HTTPS are both protocols used for transferring data over the internet. The key difference between the two is that HTTPS is a secure version of HTTP that uses SSL/TLS encryption to protect data in transit.

HTTP stands for "Hypertext Transfer Protocol". It's the protocol that web servers and web browsers use to exchange data, such as HTML pages, images, videos, and other files. HTTP operates on top of the TCP/IP protocol suite and typically uses port 80.

HTTPS stands for "Hypertext Transfer Protocol Secure". It's a secure version of HTTP that adds an extra layer of security by using SSL/TLS encryption to protect data in transit. HTTPS operates on top of the TCP/IP protocol suite, just like HTTP, but typically uses port 443.

When you visit a website using HTTPS, your browser and the web server negotiate an SSL/TLS connection. This involves the exchange of a public key and a private key, which are used to encrypt and decrypt data in transit. This makes it much more difficult for attackers to intercept and read the data being transmitted between the client and the server.

In general, it's a good idea to use HTTPS whenever possible, especially when transmitting sensitive data such as passwords, credit card numbers, and other personal information. This helps to ensure that your data is protected from prying eyes and potential attackers.



*/




















/*If you want to read the contents of the entire webpage located at https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/ and send it as the response to the client, you can use the http.get() method to make a GET request to that URL and then pipe the response to the res object using the res object's write() method.

Here's an example of how you might accomplish this:

javascript
Copy code
const http = require('http');
const https = require('https');

let server = http.createServer((req, res) => {
  https.get('https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/', (response) => {
    response.pipe(res);
  });
});

server.listen(3000);
In this example, the server listens for incoming requests on port 3000. When a request is received, the server makes a GET request to https://bfhldevapigw.healthrx.co.in/wp-cms/v1/posts/ using the https.get() method. When the response is received, the response object's pipe() method is called to pipe the response to the res object, which sends the response back to the client.

Note that in this example, the server is using HTTPS to make the request, since the URL begins with https://. If you were making a request to an HTTP URL, you could use the http.get() method instead of https.get().*/




/**/