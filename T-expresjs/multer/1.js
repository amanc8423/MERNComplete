/*Multer is a middleware for handling 
multipart/form-data
 in Express.js, which is primarily used for uploading files. It provides an easy way to handle file uploads and supports various options such as file size limits, file type validation, and more.*/

 const express = require('express');
 const multer = require('multer');
 
 const app = express();
 //const upload = multer({ dest: 'uploads/' });
 const storage = multer.diskStorage({
    destination:function(req,file,cb){ return cb(null,"./uploads")},
    filename:function(req,file,cb){
return cb(null,`${Date.now()}+${file.originalname}`);
    }
 })

 const upload = multer({storage:storage})

app.get('/',(req,res)=>{
    res.send(`<html><form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
  </form> </html>`)
})

 app.post('/upload', upload.single('file'), (req, res) => {
   // req.file contains information about the uploaded file
   res.send('File uploaded successfully!');
 });
 
 app.listen(1000, () => {
   console.log('Server started on port 1000');
 });
