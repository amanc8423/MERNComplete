// express-validator is a middleware  used to perform validation
/*


explain express-validator middleware with examples . cover all cases


Ask Codebase
Express-validator is a middleware for the Express.js framework that provides a set of validation and sanitization functions for incoming request data. It helps to ensure that the data received by the server is valid and safe to use.

Here are some examples of how to use the express-validator middleware:

Basic usage:
Copy codeconst { body, validationResult } = require('express-validator');

app.post('/user', [
  // Validate fields
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
], (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Process the request
  // ...
});
In this example, we are validating the 
name
, 
email
, and 
password
 fields of the request body. If any of these fields fail validation, the middleware will return a 400 Bad Request response with an array of errors.

Custom error messages:
Copy codeconst { body, validationResult } = require('express-validator');

app.post('/user', [
  // Validate fields
  body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
], (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Process the request
  // ...
});
In this example, we are using the 
withMessage
 function to provide custom error messages for each validation rule.

Sanitization:
Copy codeconst { body, sanitizeBody, validationResult } = require('express-validator');

app.post('/user', [
  // Validate fields
  body('name').isLength({ min: 3 }).trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 5 }),

  // Sanitize fields
  sanitizeBody('name').trim().escape(),
  sanitizeBody('email').normalizeEmail(),
], (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Process the request
  // ...
});
In this example, we are using the 
sanitizeBody
 function to sanitize the 
name
 and 
email
 fields of the request body. The 
trim
 function removes whitespace from the beginning and end of the string, while the 
escape
 function escapes any HTML characters. The 
normalizeEmail
 function normalizes the email address by converting it to lowercase and removing any dots from the username.

Custom validators:
Copy codeconst { body, validationResult } = require('express-validator');

const isStrongPassword = (value) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
};

app.post('/user', [
  // Validate fields
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').custom(isStrongPassword),

], (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Process the request
  // ...
});
In this example, we are using a custom validator function 
isStrongPassword
 to validate the 
password
 field. The function checks if the password contains at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long. If the password fails validation, the middleware will return a 400 Bad Request response with an error message.

These are just a few examples of how to use the express-validator middleware. It provides many more validation and sanitization functions that can be used to ensure that incoming request data is valid and safe to use.



*/