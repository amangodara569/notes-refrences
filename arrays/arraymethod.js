//higher order that use callback
let arr= [1,2,3,4,5];
let print = function(arg){
    console.log(arg);
};
//foreach apply on arr(will apply that particular func on that array)
arr.forEach(print);

//another way is to directly pass the fucntion
//arr ke har element ke liye (for each) function apply krna hai
arr.forEach( (el) => {
    console.log(el);
});

//apply on objects 
let marks = [{
    name: "aman",
    marks: 23,
},
{
    name:"cjj0",
    marks: 0,
}];
marks.forEach((students) => {
    console.log(students.marks)
});



//map (return result in new array)
//use when we need to store output in array


let double = arr.map((el)=> {
    return el**3;
}) //output will be stored in double as array


//filter = used when we need those elements that satisfy the condition
let satisfy = arr.filter( (el) => (el%2 == 0));



//every function (if we want to check for every element)
//returns true and false if  evey element is true or false
[2,4,6].every((el) => el %2 == 0);



//some function
[1,2,3,4].some( (el) => (el%2 == 0));
//returns true is some of them  are true else false



//reduce function
//reduce the array to a single value (not a bool)
//arr ki saari values se final value kese nikale , usko reducer function me difine krna hai
//have 2 arguments (accumulator , element)
//the accu holds the return value of the element

let nums = [1,2,3,4,5,6];
let result =nums.reduce((accum,el) => (accum+el))
//starting accum = 0 (default), el =1 , return el
// accum = stores return value (1)  ,  el = 2 , operation + , return accum+el (1+2) = 3
//and so on
//finding maximum value in an array using reduce
let maxi = nums.reduce((max,el) => {
    if(max < el){
        // max = el;
        // if we write , it is same
        return el; //will automatically be stored in max
    }else{
        return max;
    }
})
