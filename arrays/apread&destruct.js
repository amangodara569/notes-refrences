//spread
//expand an iterable into multiple values
//array ki saari values individually pass on hogi
//you cant apply partucular function on an array , use spread to apply that on individual
arr = [1,2,3,4,5,6,7,8];
Math.min(...arr)// just apply ... dots

console.log(arr)//print in form of array
console.log(...arr)//print individually
console.log(..."aman godara");

let  odd = [1,3,5]
let even = [2,4,6]
let nums = [...odd, ...even]
console.log(nums)

//with object literals
const data = {
    name : "aman",
    class: 10,
};
//use when we need to copy data
let copydata = {...data, id:123}; //adding id a new object literal
console.log(copydata)

//convert an array data into onject literal (in key value pair)
let arra= [1,2,3,4]
let object  = {
    ...arra
};
//in place of key index willl take place when there is nothing else





//rest
//just opposite of spread
//can take indefinite number of arguments and convert them in single iterable format

function sum(...args){//arguments
    for(i = 0 ; i<args.length; i++){
        console.log("you gave us ", args[i])

    }
};


//actual logic behind math.min function
function min(...args){ //so that it can take infinite no.of arguments 
    args.reduce((min,el) => {
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
};





//destructing
//[]brackets for array
//storing values of a single array in multiple arrays
let naming = ["aman", "cj", "ashu", "chutiya"];
let [names , work] =  naming;
//if name = aman , work - cj and baki sabhi ko ek me store krna hai to 
let [ one , two , ...rest] = naming; //(in rest from index 2 to last tak)


//in object literals
const student ={
    name:"aman",
    username:"amna",
    password:1234,
};
//to access its property
//we need specific info like username and password

let {username, password} = student; // now we have access to that specific info
let {username: user, password:pass , city="mumbai"} = student;
//(jiske liye search krna hai : jisme store krna hai)
//assigning a default value in city , if we dont have specific info the default is added from ourselves