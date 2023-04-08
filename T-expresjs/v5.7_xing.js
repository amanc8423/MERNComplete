// body-parser - used to parse http post request

// body-parsr has 4 option-
// 1 json
//2 urlencoded() - normal html form
//3 - row()
//4 text

const express = require('express');
//const bodyParser = require('body-parser'); // case 1
const app = express();
//const fs = require('fs');
const path = require('path');

//app.use(bodyParser.urlencoded({extended:true}));// case 1 
//false : querystring
// true : qs

app.use(express.urlencoded({extended:true})); //case 2 - we can also do like this bec express has buit in body-praser inside it so if we commment require body-parse and change above line to this it will owrk



app.post('/save-product',(req,res)=>{

    console.log('saving product....');
    console.log(req.body); // after body parser we can data for req.body it will give object with key value pair
    res.send('save successfully')  ;
});

app.get('/add-product',(req,res,next)=>{

res.sendFile(path.join(__dirname,'v5.8.html'));
});

app.listen(3000);











