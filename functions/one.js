//basic syntax
function hello(){
    console.log("hello");
    for ( i = 0 ; i<4; i++){
        console.log(i);
    }
}
//function calling
hello();

function printInfo(name, age){
    console.log(`${name}'s age is ${age}`)

}
printInfo("aman", 12);
//new way to use functions , like sum of two no
//sum(sum(1,2),3)  first sum of 1 and 2 the with three


//types of scope
//function  scope = cannot be accessed outside the function
//block scope = variables declared inside the block cannot be accessed outside
//only let and const have block scope , var doesnt have
//lexical scope = the variable defined outside the function can only be accessible  inside another function 
//defined after variable declaration, vice versa not true example nested fucntions
function man(){
    let x = 12;
    function woman(){
        console.log(x);
        //possible to do
        let y = 23;
    }
    console.log(y); 
    //cant do that
}



//function expressions , a function without a name 
var sum = function(a,b){
    var result = a+b;
    return result;
}
sum(3,4);
//typically variable ke name se funtion ko call krna