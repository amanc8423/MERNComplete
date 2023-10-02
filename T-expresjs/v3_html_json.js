


const express = require('express');
const app = express();
const port = 5050;

app.get('/',(req,res)=>{
    //res.send("<h1>welcome to home page</h1>")//to send mulitple we use res.write
    res.write("<h1>welcome to home page</h1>")
    res.write("<h1>welcome to send page</h1>")
    res.send();

});

app.get('/about',(req,res)=>{
    res.status(200).send("welcome to about page")
});

app.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
});

app.get('/temp',(req,res)=>{
//     res.write({   // for write we have to strigify first bec res.write expects a string or a buffer
//   id :1,
//   name:"aman",   // we can send object and array by res.send
//     });  
    
    // we are passing object but behind scene express stringify it and convert it in json
          // in node js we had to write content type but here express handle it



        //  app.get('/temp', (req, res) => {
            // res.write(JSON.stringify({
            //   id: 1,
            //   name: "aman",
            // }));



        // if i write res.json instead of res.send still same 
        //the methodfs are identical when an object or array is passed but res.json()
        //will also coonvert non-objects such as null and undefined which are not valid json 
         
        res.send([
            {
                id :1,
                name:"aman",
                  },
                  {
                    id :2,
                    name:"ajay",
                      }
         ]);

      

        // res.send();

        });



app.listen(port,()=>{
    console.log("server on")
});
























