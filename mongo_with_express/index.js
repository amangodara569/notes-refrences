const express  = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
//we installed method-overide for put request , require it
const methodOverride = require("method-override");
//requireing model from models
const Chat = require("./models/chat.js");
//connecting public , css folder (these are static files)
app.use(express.static(path.join(__dirname,"public")));
//to convert that post req data into readable format
app.use(express.urlencoded({extended:true}));
//using method - override
app.use(methodOverride("_method"));
//when we want to use ejs
//we use app.set
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
//main route
app.get("/chats", async (req,res)=>{
    //we need to get access of those chats from db (modelName.find())
    let ourChats = await Chat.find();
          //importing all chats
          //ye database se datalekr aa rha h take time = async - use await
    //console.log(ourChats);
    //this is how we render a page and send data to that particular page
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


//new and create route
//we will add a butoon on main page and then it will open a form for us 
//from there we will use post request to insert chat in db

//when to open the form we use get request and to submit it we have to us post request
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
});
//create route
app.post("/chats",(req,res)=>{
    let { from, msg, to } = req.body;



    //when to use req.params , when data belongs in url , makes route predictable
        //when data is required to locate the resource  - it goes in parms
    //use req.body when body is actual content , needed for post put , patch , keeping sensitive data out of url
    // params - identify the item
    // body - change or describe the item    
    //ye wo parameters hai jo tune wahan pr form me diye the
    //now we need to parse data
    //and to create a new chat  , we already have schema defined , we will use that structure only
    let newChat  = new Chat({
        from : from,
        to: to,
        message : msg,
        created_at : new Date(),
    });
    //to test
    console.log(newChat);
    //to save chat in database
    //.save is a async function , but we dont need to use await as we are useing .then method-----------------------------imp
    newChat.save().then(res => {console.log("chat was saved")}).catch(err  => console.log(err));
    
    //to send a check test
    //res.send("working");

    //we can render a new page or we can redirect to an existing one
    res.redirect("/chats");
});


//edit and update route , 
//har individual chat ke aage ek edit button lagayange , then it will send get to a form 
//wahan se post req ko redirect krdenge
//we will use id to edit a particular post
//edit route
app.get("/chats/:id/edit", async (req, res)=>{
    //to get id
    let { id } = req.params;
    //we will search that chat with id in that db
    let chat = await Chat.findById(id);
    //then render that chat data
    res.render("edit.ejs",{chat});
});

//update route left
//now when we submit and update the text we need to do that in db
//so we will use put request for that , to use that we need to update package
//npm i method-override

app.put("/chats/:id",async (req,res)=>{
    let { id } =req.params;
    let { newMsg } = req.body;
    //finding things always ashynchronous
    let updatedChat =  await Chat.findByIdAndUpdate(id,{msg: newMsg});
    res.redirect("/chats");
});

//delete route
//create dlt button and will send request to chats/:id and will dlt it from db also


//sab database wale methods async hai 
app.delete("/chats/:id",async (req, res)=>{
    let { id } = req.params;
    let deletedChat = await Chat.findOneAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})