//returning in a higher order function
// factory function = that creates new functions

let odd = function(n){
    console.log(!(n%2 == 2));
}

let even = function(n){
    console.log(n%2 == 0);
}

function factoryFunction(request){
    if (request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 2));
        }
        return odd
    } else if( request == "even"){
        let odd = function(n){
           console.log(!(n%2 == 2));
        }

        return even
    }else {
        console.log("wrong request")
    }
}
let request = prompt("enter your choice")


factoryFunction(request);

//it will use the function according to users request if he wants to test for
// even the even function will be used