//jo functions objects ke andar define hote hai vo methods hote hai
//hmne object ke andar variales define kiye in key value pairs (onject literals)
//it is also a type of key value pair
//here key is variable , value is functioin


const calculator = {
    add: function(a,b){return a+b},
    sub: function(a,b){
        return a-b;
    },
    //short way of writing
    div(a,b){
        return a/b;
    }
};
console.log(calculator); //what it holds will get printed
//to get a functions definition
console.log(calculator.add);
let val  = calculator.add(2,3);
console.log(val);

console.log(typeof([1,2,3]));