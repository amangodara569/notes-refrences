let students =["aman","rajat","jai"];
console.log(students);

//arrays are mutable
students[0]="jiya";

students[10] ="amna";
len_new = students.length();
console.log(len_new);
//its length will become 11 as on 10 index we have stored something and over 7 to 8 index are empty but their spaces are reserved

//array methods
students.push("origami"); //will add this element to end of array
students.unshift(); //add to start of an array
students.shift(); //delete from start and return it
students.pop(); // will remove the last element from array and returns it

//we can also use index of in array
students.indexOf("amna");

//use of includes
students.includes("jiya");//return boolean value


//.concat used to add to arrays
let teacher =["ramesh","suresh"];
students.concat(teacher); // it will add both the elements of both string to a single one


//we can use .reverse to reverse the string
students.reverse();


//array refrences (meaning of refrences = address in memory (we can distinguish arrays with it))------------------

let ar= int[2];
let ara = new String [10];
let name = 23;

"aman"==="aman" // to compare === (EXACTLY)  ALSO UES == TO COMPARE VALUE

[1]==[1] //OR WITH ===
//  OUTPUT WILL BE FALSE

//WATCH REFRENCE ARRAYS VIDEO AGAIN!!!!!!!!!!!!

//constant array
const a = 5; // its value cannot be changed
const values = [1,2,3,4]




