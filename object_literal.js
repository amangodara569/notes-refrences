//used to store keyed collection and complex entities
//property => (key,value) pair
//its a dictionary

const student = {
    name: "aman",
    age : 23,
    reg_no: '24MIP10062',
    arr : ['hoja', 'bhoja', 'gand ','khoja']


}; //close it remember

//to access literals
console.log(student['name']);
//easy way
console.log(student.age);
//access array in literals
student.arr[2]

let prop = "name";
student[prop]; //another way of doing same shit
//we cant use variables like these in .property
//javascript saari keys ko string me convert kr dega no matter if they are keywords or of different datatypes
//.operator will not convert
let aaja = student['age'];
console.log(aaja)

//enter a new value
student.gender = "bhadwa";
console.log(student.gender);

//to delete any literal
delete student.gender; //output boolean


//nested objects
let classInfo = {
    //here aman and anil are also objects
    aman : {
        marks:23,
        stream : "bio"
    },
    anil : {
        marks: 23,
        stream : "maths"
    }
}

//to access these
console.log(classInfo.aman.marks)
console.log(classInfo.aman.stream)


//we can also create array of objects
let class_Info = [
    {name: "anil",
     school : "virasat",   
    },
    {name : "aman",
        school : "virasat"
    }
   
]
//now we can access whole info for a person at once
//to access specific
console.log(class_Info[0].name)//anil
//all things are same
console.log(student[prop])