const mongoose = require('mongoose');

// Connection URI
//const uri = 'mongodb://localhost:27017/mydb';

// Create a new Mongoose connection
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//connection creation and creating a new db
mongoose.connect("mongodb://127.0.0.1:27017/students");


  // Define a schema for the student collection
  const studentSchema = new mongoose.Schema({
    Sid: Number,
    Name: String,
    Subject: String,
    Branch: String,
    Marks: Number
  });

  // Create a model for the student collection
  const Student = mongoose.model('Student', studentSchema);

  // Insert multiple documents
  Student.insertMany([
    { Sid: 1, Name: 'John Doe', Subject: 'Math', Branch: 'Science', Marks: 80 },
    { Sid: 2, Name: 'Jane Smith', Subject: 'English', Branch: 'Arts', Marks: 90 },
    { Sid: 3, Name: 'Bob Johnson', Subject: 'Science', Branch: 'Science', Marks: 75 },
    { Sid: 4, Name: 'Alice Lee', Subject: 'History', Branch: 'Arts', Marks: 85 }
  ]);


    // Sort the documents by marks in ascending order
    Student.find().sort({ Marks: 1 }); // -1 for descending
    

    //CRUD

    // Insert one more document
//Student.insertOne({ Sid: 5, Name: 'David Brown', Subject: 'Geography', Branch: 'Arts', Marks: 95 }); // insertOne is not applicable in mongoose

Student.create({ Sid: 5, Name: 'David Brown', Subject: 'Geography', Branch: 'Arts', Marks: 95 });

