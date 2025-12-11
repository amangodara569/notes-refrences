const mongoose = require("mongoose");
//const { Schema } = mongoose;
const Schema = mongoose.Schema;
//.connect is a asynchronous function so we have to deal accordingly
//mongoose.connect("mongoose://127.0.0.1:27017/test"); //test =>name of db
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
};
//run main function #database
main()
    .then(() => {
        console.log("connection succesfull")} )
    .catch(err => console.log(err));



//schema and models
//schema defines shpae of the document within the collections
//schema defined for table then every row should follow and schema defined for the collection then every collection should follow

const userSchema = new Schema({  //starting 3 line
    name : String,
    email : String, 
    age : Number
});

//models in mongoose is a class with which we construct documents
//we can define what  a user should have

const User = mongoose.model("User",userSchema);  //const user= model name , "user" = collection name(shown in shell)  ,both should be same
//const employee = mongoose.model("employee",userSchema);

//model = class (collection)  object = document



//adding users, or data
const user1 = new User({
    name : "adam",
    email : "adam@gmail.com",
    age : 23
});
//cant see in db as its not saved, still the space is reserved for it in memo , 
// to see , node => .load index.js
//to save   , document name .save()
user1.save();
//save returns promise . so we can apply .then .catch



//multiple insertion
User.insertMany([
    {name: "jophn", email: "john@gamil.com", age : 23 },
    {name: "aman" , email: "aman@gmail.com" , age :34 }
]).then((data)=> {
    console.log(data);
}).catch((err)=>{
    console.log(err);
});



//mongoose uses operation buffering 
//it lets you start using your models immediately , without waiting for mongoose to establish a connection to mongodb
//connection banne se phelel hi we can do everything


//model.find() return a query object (thenable) we can use .then on it although its not promise


User.find({}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
//all the commands are same as that of shell 
// we can filter out many things its easier in js that in shell


//if we want to update 
User.updateOne({name: "aman"}, {age: 19}).then((update)=>{
    console.log("content updated!!");
    console.log(update);
});

//there are multiple methods , go and see docs
//easy explaination



//schema validation(applying  rules)
//schema is colomns , for every colomn we need to define a name and datatype
