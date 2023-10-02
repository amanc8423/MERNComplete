const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

var client = new MongoClient("mongodb://127.0.0.1:27017/car");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/carMongo.html");
});

app.post("/", async (req, res) => {
  var { model, company, colour, mileage, owner } = req.body;
  await client.connect();
  //   await client
  //     .db()
  //     .collection("car")
  //     .insertOne({
  //       model: model,
  //       company: company,
  //       colour: colour,
  //       mileage: parseInt(mileage, 10),
  //       owner: owner,
  //     });
  var filter = client
    .db()
    .collection("car")
    .find({ mileage: { $gte: 10 } });
  filter = await filter.toArray();

  //   await client.db().collection("car").updateMany({group:{$exists:false}}, {$set:{group:'a'}});
  await client
    .db()
    .collection("car")
    .updateOne({ group: "b" }, { $set: { group: "a" } });
  console.log(filter);
  res.end("pushed!!");
});

app.listen(3000);
