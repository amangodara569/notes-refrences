const express  = require("express");
const app = express();
const mongoose = require("mongoose");
//requireing model from models
const Chat = require("./models/chat.js");

//when we want to use ejs
const path = require("path");
app.set("views", path.join(__dirname,"/views"));
app.set("view engine","ejs");
//
main().then(res => {console.log("connection with db successfull")})
    .catch(err =>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

app.listen(3000, ()=>{
    console.log("server running at 3000");
});

app.get("/",(req,res)=>{
    res.send("root is working");
});



let chat1 = new Chat({
    from : "neha",
    to : "aman",
    message : "send me you diddy",
    created_at : new Date(), //default fn that automatically generates date
});

chat1.save().then(res => console.log(res));