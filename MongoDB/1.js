// mongodb - NoSQL
/*



//https://www.youtube.com/watch?v=ofme2o29ngU

SQL-
1. it works on rdbms(relational database management system)relational means table
2.  it stores data in form of entity as tables
3. it uses sql to query databse


NoSQL - 
1. its non-relational,document-oriented database management system and works on document-based database.
2. MongoDB stores data in form document
3. MongoDB uses BSON to query database.


https://www.mongodb.com/json-and-bson

JSON and BSON :-
MongoDB was designed from its inception to be a database focused on delivering great development experience. JSON’s ubiquity made it the obvious choice for representing data structures in MongoDB’s document data model.

However, there are several issues that make JSON less than ideal for usage inside of a database.

1. JSON only supports a limited number of basic data types. Most notably, JSON lacks support for dates and binary data.

2. JSON objects and properties don’t have fixed length which makes traversal slower.

In order to make MongoDB JSON-first, but still high performance and general purpose, BSON was invented to bridge the gap: a binary representation to store data in JSON format, optimized for speed, space, and efficiency. It’s not dissimilar from other binary interchange formats like Protocol Buffers, or Thrift, in terms of approach.



What is BSON?
BSON stands for “Binary JSON,” and that’s exactly what it was invented to be. BSON’s binary structure encodes type and length information, which allows it to be traversed much more quickly compared to JSON.

BSON adds some non-JSON-native data types, like dates and binary data, without which MongoDB would have been missing some valuable support.


Does MongoDB use BSON or JSON?
MongoDB stores data in BSON format both internally, and over the network, but that doesn’t mean you can’t think of MongoDB as a JSON database. Anything you can represent in JSON can be natively stored in MongoDB, and retrieved just as easily in JSON.




// mongodb provides flexibility because in it we can add any number of field in a document whereas in sql if one row has 5 column than i ither to have 6 or 4 becomes difficult
//sql - table , column ,row
//MongoDB - collection , feilds, document



//https://www.codewithharry.com/blogpost/mongodb-cheatsheet/





MongoDB is a popular NoSQL database that is designed to store and manage unstructured data. It is a document-oriented database that uses JSON-like documents with dynamic schemas, making it easy to store and retrieve data in a flexible and scalable way. Here are some examples and use cases of MongoDB:

Storing user data: MongoDB is commonly used to store user data for web applications. For example, you can create a collection called "users" and store user information such as name, email, password, and other relevant data.
Copy codedb.users.insertOne({
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password123",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
})
E-commerce applications: MongoDB is also used in e-commerce applications to store product information, customer orders, and other relevant data. For example, you can create a collection called "products" and store product information such as name, description, price, and other relevant data.
Copy codedb.products.insertOne({
  name: "iPhone 12",
  description: "The latest iPhone with 5G capabilities",
  price: 999.99,
  brand: "Apple",
  category: "Electronics",
  features: ["5G", "A14 Bionic chip", "Super Retina XDR display"]
})
Real-time analytics: MongoDB is also used for real-time analytics and data processing. For example, you can use MongoDB to store and analyze data from social media platforms such as Twitter or Facebook.
Copy codedb.tweets.insertOne({
  user: "johndoe",
  text: "Just had the best pizza ever at Joe's Pizza!",
  timestamp: ISODate("2021-05-01T12:00:00Z"),
  likes: 10,
  retweets: 2,
  hashtags: ["pizza", "foodie"]
})
Internet of Things (IoT): MongoDB is also used in IoT applications to store and manage sensor data, device information, and other relevant data. For example, you can create a collection called "sensors" and store sensor data such as temperature, humidity, and other relevant data.
Copy codedb.sensors.insertOne({
  sensor_id: "12345",
  temperature: 25.5,
  humidity: 60,
  timestamp: ISODate("2021-05-01T12:00:00Z"),
  location: {
    latitude: 37.7749,
    longitude: -122.4194
  }
})
In summary, MongoDB is a flexible and scalable NoSQL database that can be used for a wide range of applications, including web applications, e-commerce, real-time analytics, and IoT. Its dynamic schema and JSON-like documents make it easy to store and retrieve data in a flexible and efficient way.


explain mongoose with examples and cover all cases 


Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. provides a simple and easy-to-use API for interacting with MongoDB databases and simplifies the process of defining and working with data models. Here are some examples and use cases of Mongoose:

Defining a schema: Mongoose allows you to define a schema for your data models. A schema is a blueprint for the structure of your data and defines the fields and their types. For example, you can define a schema for a user model with fields such as name, email, and password.
Copy codeconst mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
Creating a document: Once you have defined a schema, you can create a document by instantiating a new instance of the model and passing in the data. For example, you can create a new user document with the following code:
Copy codeconst newUser = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password123'
});

newUser.save()
  .then(() => console.log('User created successfully'))
  .catch(err => console.error(err));
Querying data: Mongoose provides a powerful query API for retrieving data from MongoDB. You can use methods such as 
find
, 
findOne
, and 
findById
 to retrieve data based on specific criteria. For example, you can retrieve all users with the following code:
Copy codeUser.find()
  .then(users => console.log(users))
  .catch(err => console.error(err));
Updating data: Mongoose also provides methods for updating data in MongoDB. You can use methods such as 
updateOne
, 
updateMany
, and 
findByIdAndUpdate
 to update data based on specific criteria. For example, you can update a user's email with the following code:
Copy codeUser.updateOne({ name: 'John Doe' }, { email: 'newemail@example.com' })
  .then(() => console.log('User updated successfully'))
  .catch(err => console.error(err));
Deleting data: Mongoose provides methods for deleting data from MongoDB. You can use methods such as 
deleteOne
, 
deleteMany
, and 
findByIdAndDelete
 to delete data based on specific criteria. For example, you can delete a user with the following code:
Copy codeUser.deleteOne({ name: 'John Doe' })
  .then(() => console.log('User deleted successfully'))
  .catch(err => console.error(err));
In summary, Mongoose is a powerful ODM library for MongoDB that simplifies the process of defining and working with data models. It provides a simple and easy-to-use API for interacting with MongoDB databases and allows you to perform CRUD operations with ease.



*/





















