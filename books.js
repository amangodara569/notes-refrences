//store schema files in model folder then export them


//if we want to store books data in database, then books is name of collection and each docuement is an individual book
  
const mongoose = require("mongoose");
const Schema = mongoose.Schema; //its better to write it while creating schema
main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
});

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon"); //amazon database ka name hai, books collection hai
};


//we wont see the database until we define scheme or add some data
//schema for books => kya details cahiye book ke liye = title , author , language, price , publication

const bookSchema = new Schema({
    title : String,   //basic way shortcut, but we need to be descriptive
    //we use this when we have only one constraint , when we have many we use this
    author: {
        type : String,
        //can add other constraints
        required: true,  //like author hona hi cahiye , we use this property and go read monodb docs for more
    },
    price:{
        type : Number,
        default : 200
    },
    discount:{
        type : Number,
        default : 20
    },//in database we will see default valued if we didnt updated it for a document,
    category:{
        type : String,//apply lowecase first then enum will work perfectly
        enum : ["fiction","drama"]//not satisfied we will get validation error
    },
    genere:[String], //we can add different geners in array
});


//create model , to form collection in database
const Book = mongoose.model("Book",bookSchema);

//we can manually add data
let book1 = new Book({
    title: "mathematics",
    //if we dont add title or aything like that we will get error as validation failed 
    //we decided some default constrainsts and we didnt completed them
    author : "RD SHARMA",
    price : 1200, //if we enter string here "abcd " , in database it can;t be parsed in number
    //as we decided so we will face error
    //if we do "23" it works , as it can be converted into number
    genere : ["comics","faaltu","funny"]
});

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{console.log(err)});






//schema type options, go and see docs
//like use of default in constraints
//schematype for string , Number etc are also defined , see docs bc
//if we apply these properties , then the data will be formatted according to these  parms, and then will be stored in db
//if we want to store data according to category like agar fiction hai to hi, use enum property

