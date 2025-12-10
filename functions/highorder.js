//high order functions 
//that does one or both of ;

//takes one or multiple functions as arguments
//returns a function


//example
function multipleGreet(func, n){
    for(i = 0 ; i<n; i++){
        console.log(func)
    }
}
let greet = function(){
    return "helllo"
}
multipleGreet(greet, 5);

//other way

function multipleGreet(func, n){
    for(i = 0 ; i<n; i++){
        func();
    }
}
let greetthem = function(){
    console.log("hello")
}
multipleGreet(greetthem, 5);

//there is a difference in both ways
//if you pass greet like this greet()  mistake boy