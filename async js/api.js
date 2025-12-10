///how to access json data
let data = '{"fact":"you are fat as fuck"}';

//=========it is conerting json data to js object
let result = JSON.parse(data);
console.log(result);  //output will be an js object

//==========it is converting js object to json data
let reverse = JSON.stringify(data);
console.log(reverse);

//https headers , they supply extra informatoin in request and response



//first api request
let url = "url of api";

fetch(url)
.then((response) => {
    console.log(response); //to print output
    return response.json() //to get data into redable format it also returns a promise
})
//it will catch response.json as promise
.then((data)=>{
    console.log(data); //data.fact = to get only fact
    //if we want to again sent request
    return fetch(url);
})
.then((data)=>{
    return data.json();
})
.then((res)=>{
    console.log(res.fact);
})
.catch((err) => {
    console.log(err);
});
//first then promise return krega , second then usko fetch krke print krega

//api fetch => return promise =>convert in redable format (.json) => print it





//another way of doing the same using async
async function getData() {
  try{
    let res = await fetch(url);  //if u dont use await here , we will always get undefined as js is synchronous it will print the result instantly with getting response from api
    let data = await res.json();
    console.log(data);

    //if we want to again call it 
    let res2 = await fetch(url);
    let data2 = await res2.json();//dont forget json()
    console.log(data2.fact);

  }catch(err){
    console.log(err);
  }
    
};



//more improved way to send request
//axios method , search for it and then copy cdn link and paste it
//no need to parse it , already in readable format
async function byaxios(){
  try{
    let res = await axios.get("url_here"); //return a promise
    return res.data.fact;
  }catch(err){
    console.log("error is ",err);
    return "nothing found"
  }
};
//async function ke output ke liye async callback use kr 

//how to send headers with calls
async function doNothing(){
  try{
    const config = {headers : {accept:"application/json"}};
    let res = await axios.get(url,config);
      return res.data
  }catch(err){
    console.log(err);
  }
};



//to export the contents of this file to another one
module.exports = 1234;   //you exported 1234
//by default module.exports ek empty object hai
//to export functions just create their objects
let obj {
  mul : mul,
  sum : sum,
};
module.exports = obj;
//in other file write
const somevalue = require("./fileName");
console.log(somevalue);


//export from directory 
//create a file in the directory from which the data has to be takes index.js(always use this name)
//in that file write
const file_1 = require("./file_1");
const file_2 = require("./file_2");
const file_3 = require("./file_3");
let final = [ file_1, file_2, file_3];
module.exports = final;

//in other file write 
const info = require("./final");
console.log(info);