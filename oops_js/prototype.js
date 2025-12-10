//in js we have prototypes
//mechanism by wihich objects inherit features from one another
//har object ke pass khudke prototypes hai jo build in fucntions store krte hai
let arr = [1,2];
console.log(arr.__proto__);
arr.__proto__.push = (n)=>{ console.log("pushing:",n)};
//to checck prototye for array
Array.prototype;
String.prototype;
//use them in console


//creating factory function
function personName(name,age){
    const person={
        name: name,
        age: age,
        talk (){
            console.log("fucker can talk");
        }
    };
    return person;
};

let p1 = personName("aman",23);

//disadvantage
//har ek object khudki copy create krega
//like same function , but evey object creates its own copy
//p1.talk === p2.talk , false as both have different memo address



//best way to create 
//constructors
function Person(name,age){
    this.name = name;
    this.age = age;
};
let p1 = new Person("aman",23);
//to create a new instance from blueprint we use new
//new also change working of this inside constructor
Person.prototype.talk = function(){
    console.log("fuckers can talk");
};


//more better 
//create class
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log("fuckers can talk");
    }
};

let p1 = new Person("aman",23);
//use extends for inheritance
//use super to call parent class constructor