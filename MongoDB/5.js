 // web dev simplified

 const mongoose = require("mongoose");

 const User = require("./5.1")
 
 // mongoose.connect("mongodb://localhost/testdb",
 // ()=>{console.log("connected")},e=>console.log("error"));
 
   mongoose.connect("mongodb://127.0.0.1:27017/testdb1");
 
   run()
 
   async function run(){
 
 //  const user =   new User({name : "Kyle",age:26})
 //  await user.save() // user.save() is async func
 

 try { 
 const user = await User.create({

    name : "Kyle",
    age:26,
    email:"Anc@gmail.com",
    hobbies:["dance","cricket"],
    address:{
        street:"main road",
            
    }

});// we can use above two line or simply this one
 
  console.log(user)
} catch (e){
 console.log(e.message);
   }
}
 
 
 