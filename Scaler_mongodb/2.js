
// update
const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/abc");


// Define the student schema
const studentSchema = new mongoose.Schema({
    Sid: Number,
    Name: String,
    Subject: String,
    Branch: String,
    Marks: Number
  });
  
  // Create the student model
  const Student = mongoose.model('Student', studentSchema);

  
  
    let abc = async(id)=>{ 
    
  let cc = await Student.findById(id);
  if(!cc) return;
  cc.Name=("aman")
  let c1 = await cc.save();
  console.log(c1);
    
}

    abc('6456ac3a83b16e4713028577');

