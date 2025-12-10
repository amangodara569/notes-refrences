//trim meathod
//used to remove spaces from a string
let anonymous ="   anam   ";
let name_his= "anam";
let user =prompt("enter your name");
console.log(user.trim());
//strings are immutable in js if you do something with it , a new copy will be formed and will be displayed



//to upper case and lower case
console.log(name_his.toUpperCase()); //same for lowercase


//string methods with arguments
anonymous.indexOf("aman"); //a single char can also be passed 


//chaining meathod
let chain = anonymous.indexOf('O').toUpperCase();  // just apply a . between two functions


//slicing in js
anonymous.slice(1,3); // two arguments (starting index , ending index) ending  index is not included
anonymous.slice(3) // if you pass only one argument then the ending index will be .length itself
anonymous.slice(-1) //if you pass - index then it means that it will print upto .length-1;
//slice returns a copy of what he did




//replace and repeat meathod
anonymous.replace('a',0); // it will replace the first occurence of a with that particular value
anonymous.repeat(3) // it will repeat str n times


//use of splice , loooks like slice but is not
//best thing about splice is it changes the original array

anonymous.splice(1,1,"aman","godara"); //(starting index , delete count , element 1 to add ,  element 2 to add , .....)
//delete count =  like if starting index is 0 the delete = 1 which is at first index , like 0 index se shuru kro or 1 ek element ko delete kro
// now like at index 1 two more elements will be added aman and godara
//splice(1,2) mtlb index 1 se start kr and vo value and uske next value to dlt kr
anonymous.splice(0,0,"ji"); //kuch dlt nhi krna or 0 index pr ji add krna hai
// you can use splice fucntion to change , update , add values in an array
//or like normally you can also do that



//use of sort function
anonymous.sort(); //just normally sort the function in either ascending or descending or depends on data which is prenent in array
