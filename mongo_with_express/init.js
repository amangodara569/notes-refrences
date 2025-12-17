//use this for initialization of database
//we need to setup our mongo connection in this

//this setup is for sample to test anything , its not out main db

//we can test model schemas init with custom data and db commands

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(res => console.log("success"))
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};    


//creating sample database
let allChats = [
    {
        from : "neha",
        to : "preeti",
        message : "send me notes",
        created_at : new Date(),
    },
    {
        from : "neha",
        to : "preeti",
        message : "bhej na kya kr rhi hai",
        created_at : new Date(),
    },
    {
        from : "neha",
        to : "amanito",
        message : "bhai choclate dede",
        created_at : new Date(),
    },

];
Chat.insertMany(allChats);
