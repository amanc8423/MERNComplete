const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street:String,
    city:String,
})

const userSchema = new mongoose.Schema({

    name : String,
    age : {
        type : Number,
        min:1,
        max:100,
        //custom validaton
        validate:{
            validator : v=>v%2===0,
            message:props=>`${props.value} is not even`,
        }
    },
    email:{
       type: String,
       minLength:10,
       required:true,
       lowercase:true,

    },
    createdAt:{
        type : Date,
        default:()=>{Date.now()},
       immutable:true , // it will not let change the value
    },
    updatedAt:Date,
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    // address:{
    //     street : String,
    //     city : String,
    // }

    address : addressSchema,

})

module.exports = mongoose.model("User",userSchema);