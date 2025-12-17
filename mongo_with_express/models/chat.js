//professional we will store all the collection in model folder
//we will require everything in main index.js file only

//we will create and store all our schemas here
//this model file will aquire data from db and will render to our pages thats why we export it
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema ({
    //chats will have (id, from , to , message, created_at(date format others in string))

    //first create the default schema , the go with adding multiple constraints as needed
    //like we always need from , to , created_at = required:true
    from : {
        type : String,
        required : true,
    },
    to : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        maxLength : 50,
    },
    created_at : {
        type : Date,
        required : true,
    }
});


const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;


//commits on github will only be shown when done on default branch
