const { MongoClient } = require("mongodb");

var client = new MongoClient("mongodb://127.0.0.1:27017/house");

// createHouse();
createStudents();

async function createHouse() {
  await client.connect();
  await client
    .db()
    .collection("house")
    .insertMany([
      { Hno: 1, rooms: 3, furniture: false, rent: 20000 },
      { Hno: 2, rooms: 2, furniture: true, rent: 2000 },
      { Hno: 3, rooms: 8, furniture: true, rent: 90000 },
    ]);
  console.log("Inserted rooms");
}

async function createStudents() {
  await client.connect();
  await client.db().collection("students").insertMany([{name:'Kumar', age:50, marks:30 }, {name:'Arun', age:20, marks:100}]);
  var filter =  client.db().collection("students").find();
  filter = await filter.toArray();
  console.log(filter.sort((a,b)=> (a.marks > b.marks)? 1: (a.marks < b.marks)? 1 : 0));

}
