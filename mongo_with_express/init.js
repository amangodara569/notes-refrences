//use this for initialization of database
//we need to setup our mongo connection in this
const mongoose = require("mongoose");
main().then(res => console.log(res))
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};    


//creating sample database
let chats = [
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