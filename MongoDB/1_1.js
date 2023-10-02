// mongodb is document oriented  nosql database
// mongoose is library used to connect nodejs with mongodb database


const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/my22', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

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


// Add a new student to the collection
const newStudent = new Student({
  Sid: 6,
  Name: 'Sarah',
  Subject: 'Biology',
  Branch: 'Science',
  Marks: 95
});

await newStudent.save()
  .then(() => console.log('Added new student to the collection'))
  .catch(err => console.error('Error adding new student to the collection', err));

// Find a student by ID and update their marks
await Student.findByIdAndUpdate(1, { Marks: 85 }, { new: true })
  .then(student => console.log('Updated student:', student))
  .catch(err => console.error('Error updating student', err));

// Find a student by ID and delete them
await Student.findByIdAndDelete(2)
  .then(() => console.log('Deleted student'))
  .catch(err => console.error('Error deleting student', err));

   // Sort the documents by marks in ascending order
   await Student.find().sort({ Marks: 1 }).then(() => console.log('sorted student'))
   .catch(err => console.error('Error deleting student', err)); // -1 for descending

// Find all students and display them in the console
 await Student.find()
  .then(students => console.log('All students:', students))
  .catch(err => console.error('Error fetching students', err));


}

abc();