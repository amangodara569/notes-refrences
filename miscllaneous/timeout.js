//window ka inbuilt function hai
//setTimeout(funciton(callback (function used as a argument)),timeout)
//it takes time in ms 
setTimeout(func,1000);
//another way
setTimeout(()=> {
    console.log("hi");
},  2000);
setTimeout(()=> {},  2000); //used arrow function



//setInterval same as set timeout , takes same argument
//it will carry on that process after a particular period of time
setInterval(()=> {
    console.log("hi")
},4000);

//we can assign it  an id
let id = setInterval(()=> {
    console.log("hi")
},4000);
console.log(id);

//to stop its working
clearInterval(id) //id as argument now it will stop
