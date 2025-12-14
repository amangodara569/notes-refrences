const express  = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
//requireing model from models
const Chat = require("./models/chat.js");
//connecting public , css folder (these are static files)
app.use(express.static(path.join(__dirname,"public")));

//when we want to use ejs

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


//creating routes
app.get("/chats", async (req,res)=>{
    //we need to get access of those chats from db (modelName.find())
    let ourChats = await Chat.find();
          //importing all chats
          //ye database se datalekr aa rha h take time = async - use await
    console.log(ourChats);
    //this is how we render a page and send data to that
    res.render("index.ejs",{    ourChats    });    
});



let chat1 = new Chat({
    from : "neha",
    to : "aman",
    message : "send me your diddy",
    //if you wrote msg then you wont be able to see message in db mongo wont save it
    created_at : new Date(), //default fn that automatically generates date
});

chat1.save().then(res => console.log("saved"));



//like now everything is done we have created  models , we have data in database , now the only 
//work left is to send it to front end