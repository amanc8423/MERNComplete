const express = require('express');
const { check, validationResult } = require('express-validator');
const app = express();
const path = require('path')
app.use(express.urlencoded({extended:true}))

app.post('/submit-form', [
    // Validate fields
    check('name').notEmpty().withMessage("name must not be empty").isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    check('regNo').isNumeric().withMessage('Registration number must be numeric'),
    check('rollNo').isNumeric().withMessage('Roll number must be numeric'),
    check('mobileNo').isMobilePhone().withMessage('Invalid mobile number'),
    check('email','Invalid email address').isEmail(),  
  ], (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      res.json({errors:errors.array()});
      //res.end(errors);
      //res.status(400).json({ errors: errors.array() });
    }

    else{ res.end(`my name is ${req.body.name}`) }
  
    // Process the request
   // const { name, regNo, rollNo, mobileNo, email } = req.body;
    // ...

  });

  app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"2a.html"))
})
app.listen(8090,()=>{console.log("server on")});




