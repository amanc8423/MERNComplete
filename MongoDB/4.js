 // web dev simplified

const mongoose = require("mongoose");

const User = require("./4.1")

// mongoose.connect("mongodb://localhost/testdb",
// ()=>{console.log("connected")},e=>console.log("error"));

  mongoose.connect("mongodb://127.0.0.1:27017/testdb");

  run()

  async function run(){

//  const user =   new User({name : "Kyle",age:26})
//  await user.save() // user.save() is async func

const user = await User.create({name : "Kyle55",age:26});// we can use above two line or simply this one

//if we want to update a field

user.name="aman13"
await user.save()

 console.log(user)

  }



