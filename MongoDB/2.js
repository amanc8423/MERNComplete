/*
MongoDB is a document-oriented NoSQL database designed to handle large volumes of data. It includes its own query language and 
supports features like sharding and replication.

Mongosh is a shell for MongoDB that provides a command-line interface for interacting with databases. It includes syntax highlighting, 
autocompletion, and other features to make working with MongoDB more efficient.

Mongoose is an Object Data Modeling (ODM) library for MongoDB. It provides a way to define schema and write queries for MongoDB in a 
more structured way. Mongoose also includes features like validation, middleware, and virtuals.

mongod - mongodaemon it is server
mongosh - mongoshell it is cli which help to communiate with server

Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and is used to connect, query, validate and manipulate data between
 MongoDB and Node.js applications. Below are some of the important features of Mongoose:

1. Schema-based design: With Mongoose, developers can specify a schema for their MongoDB collections, which describes the structure of 
the data and its types. This helps to enforce data consistency and prevent errors.

Sample code to define a Mongoose schema:

```
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
```

2. Validation: Mongoose provides built-in validators that ensure that data entered into the database meets the specified criteria. 
For example, `required` makes sure that a field is provided, `unique` ensures that there are no duplicates, and `min` and `max` set
 limits for numeric fields.

Sample code to add validation to a Mongoose schema:

```
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: '{VALUE} is not a valid email address'
        }
    },
    password: {
        type: String,
        required: true
    }
});
```

3. Query building: With Mongoose, developers can build complex queries using methods such as `find()`, `findOne()`, and `where()`.

Sample code to build and execute a query in Mongoose:

```
User.find({ age: { $gte: 18 } })
    .where('name').equals('John')
    .sort('-createdAt')
    .select('name age')
    .exec(function(err, users) {
        if (err) return console.error(err);
        console.log(users);
    });
```

4. Middleware: Mongoose provides middleware functions that allow developers to define logic that runs before or after certain operations, 
such as saving or deleting a document.

Sample code to add a pre-save middleware function to a Mongoose schema:

```
userSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
});
```

5. Population: With Mongoose, developers can perform population to retrieve related documents from other collections,
 instead of storing all the data in a single collection.

Sample code to perform population in Mongoose:

```
const postSchema = new Schema({
    title: String,
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

Post.find()
    .populate('author')
    .exec(function(err, posts) {
        if (err) return console.error(err);
        console.log(posts);
    });
```

Overall, Mongoose provides a lot of features that make it easier to work with MongoDB in Node.js applications.




*/

