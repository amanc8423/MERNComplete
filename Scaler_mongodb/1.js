//https://www.scaler.com/topics/course/nodejs/video/1005/

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/abc2");


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
  
  
  // Add multiple documents to the student collection
  const students = [
      { Sid: 4, Name: 'John', Subject: 'Math', Branch: 'Science', Marks: 80 },
      { Sid: 3, Name: 'Jane', Subject: 'English', Branch: 'Arts', Marks: 90 },
      { Sid: 2, Name: 'Bob', Subject: 'Science', Branch: 'Science', Marks: 75 },
      { Sid: 5, Name: 'Alice', Subject: 'History', Branch: 'Arts', Marks: 85 },
      { Sid: 1, Name: 'Tom', Subject: 'Geography', Branch: 'Science', Marks: 70 }
    ];
  
  
  
    let abc = async()=>{ 
    
    await Student.insertMany(students)
      .then(() => console.log('Added students to the collection'))
      .catch(err => console.error('Error adding students to the collection', err));
  
      const newStudent = await new Student({
        Sid: 6,
        Name: 'Sarah',
        Subject: 'Biology',
        Branch: 'Science',
        Marks: 95
      });
      
let result = await newStudent.save();
//console.log("user created");

let f  = await Student.find();
  //console.log(f);

let ff  = await Student.find({Sid:1});
//console.log(ff);

let f1  = await Student.find({Sid:1}).select({Name:1}); // 1 stands for true write 1 or true
//console.log(f1);

let f2  = await Student.find({Sid:6}).select({Name:1,Marks:1}); // 1 stands for true
console.log(f2);

let f3  = await Student.find().sort({Sid:1});
//console.log(f3);

// comparison operator- lt, lte, gt,gte,eq, in - for specific

let f4 = await Student.find({Sid:{$lt:3}});
//console.log(f4);

let f5 = await Student.find({Sid:{$in:[3,5,1]}});
//console.log(f5);

// logical operator = or , and

let f6 = await Student.find().or([{Sid:1},{name:"jake"}]);
//console.log(f6);

let f66 = await Student.find().or([{Sid:1},{name:"jake"}]).select({Name:1});
console.log(f66);

let f7 = await Student.find().and([{Sid:1},{name:"jake"}]);
//console.log(f7);
    
}

    abc();

    // update

    let bbc = async(id)=>{ 
    
      let cc = await Student.findById(id);
      if(!cc) return;
      cc.Name=("aman")
      let c1 = await cc.save();
      console.log(c1);
        
    }
    
        bbc('6456ac3a83b16e4713028577');

bbc();

        //delete


        let cc = async(id)=>{ 
    
          let c1 = await Student.findByIdAndRemove(id);
         
          console.log(c1);
            
        }
        
            cc('6456ac3a83b16e4713028577');
        
        
cc();












