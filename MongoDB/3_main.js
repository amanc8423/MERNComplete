// mongoose
// mongodb is document oriented  nosql database

/* https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/ */


const mongoose = require("mongoose");

//below line will return promise 
//connection creation and creating a new db
mongoose.connect("mongodb://127.0.0.1:27017/ttchannel").then(()=>{console.log("connection successfull.....")}).catch((err)=>{
    console.log(err);
});

//schema
// A mongoose schema defines the structure of the document,
// default values, validators, etc.,

const playlistSchema = new mongoose.Schema({
    name:{
       type : String, 
       required : true
    
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
}
)


// a mongoose models is a wrapper on mongoose schema. with help of model we can do crud easily

const Playlist = new mongoose.model("Playlist",playlistSchema);

const reactPlaylist = new Playlist(
    {
        name:"Aman",
        ctype:"Front-end",
        videos:80,
        author:"aman",
        active:true
    }

)

reactPlaylist.save();// .save() is async so better make it await









