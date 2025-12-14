//professional we will store all the collection in model folder
//we will require everything in main index.js file only
const mongoose = require("mongoose");
const schea = mongoose.Schema;
const chatSchema = new Schema ({
    //chats will have (id, from , to , message, created_at(date format others in string))
    from : String,
})