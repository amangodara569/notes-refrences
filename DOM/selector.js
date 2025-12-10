//run all in console


// id selector
document.getElementById("mainImg");
let imageObject = document.getElementById("mainImg");
console.log(imageObject);
//most important to know about anything
console.dir(imageObject); 
//this command will tell you everything about that 
//through this we can also change some properties for that  object




//class selector
//returns element as an html collection or emppty if not found
//--------imp we will never get null if class name is worng , get empyt html collection
document.getElementsByClassName("oldImage");
//will return a collection to access use [1]after this
document.getElementsByClassName("oldImage")[1];
let smallImg = document.getElementsByClassName("oldImg");
//print all images dir
for (i=0; i<smallImg.length; i++){
    console.dir(smallImg[i].src);
}
//remember we can change everything
//like changing source of every image
for (i = 0 ; i<smallImg.length; i++){
    smallImg[i].src = "amanNeChangeKiya";
    console.log(`src changed for index ${i} to =`);
    console.dir(smallImg[i].src);
}






//select with tag name;
document.getElementsByTagName("p") //paragraph tag
//output will be html collection





//query selector
//allow to use any css selector , easy to use , more prefreable
document.querySelector('p');
document.querySelector('#myID');
document.querySelector('.myclass');
//yahanpe collection print nhi ohga , vo particular object hi print hoga main difference between this 
//and other operations

//its accessing syntax is same as css selectors
console.dir(document.querySelector('div a'))  //div ke andar wala(first wala hi select hoga) anchor tag

//to select all
console.dir(document.querySelectorAll('p')); // all p tags







//-----------------------------imp-----------------------------
//using properties and methods
//innerText = shows the visible text combined in a node
//      saara visible text dikhega jo user ko dikhta hai
//text content = show all the full text
//      hidden wala bhi dikhai ga
//innerHTML = show full markup
let prop = document.querySelector('p');
console.log(prop.innerText);
console.log(prop.textContent);
console.log(prop.innerHTML);

//through this we can also manipulate data
prop.innerText = 'amans data';
parseFloat.innerHTML = 'aman <b>godara</b>' ;//it will recognize html tags also
//both of them cant
let heading = querySelector('h1');
prop.innerHTML = `<u> ${heading.innerText} </u>`;  //also a way to do things




//manipulating attributes
//like id  class  img  source etc
let imgage = document.querySelector('img');
//you will know what you can change in attributes after running it in console
//image ki id cahiye
imgage.getAttribute('id');
//to change its value
imgage.setAttribute('id','spoder_man');
//if you change this setting , css me panga ho jai ga ,  effects will no longer take place





//manipulating styles
//in css background-image , in js backgroundImage (camel case)
//saari properties dir se access hongi , then use your fucking brain
let headi = document.querySelector('h1');
console.log(headi.style);
//will show all the style attributes , same as dir 
headi.style.color = 'blue';  //manipulation
headi.style.backgroundColor = 'black'; //keep in mind (-) use only in css not in js


//question , change color of all anchor links of box class
let chg_link_clr = document.querySelectorAll('.box a');
//to select all anchor tags
//while changing attributes of multiple elements use loop only
for (i =0 ; i<chg_link_clr.length; i++){
    chg_link_clr[i].style.color = 'green';
    //loop format yaad rakh placement of [i] me galti hogi


}
//better to use for of loop
for (link of links){
    link.style.color = 'pink';
}
//------------------------imp------------------
//style wala sab inline property me set hota hai 
//sirf inline style access ho sakta hai bai nhi



//classList property , assigning a class or identifying class for an object
let im = document.querySelector('img');
im.classList; 
//if already assigned class , it will apperar

//fi we want to add
im.classList.add('newClass  secondClass') //assigned two classes
//imp --------------- if we use here set attribute  we wont be able to add multiple classes to that object
//it will limit to that one class
//to remove class
im.classList.remove('secondClass');

//to check if that object has a particular class or not
im.classList.contains('secondClass') //bool output

//to toggle , add or remove
im.classList.toggle('secondClass'); //it is switched on , if previously removed








//navigation on page
let h = document.querySelector('h4');
console.log(h.parentElement);//ouput will be a parent element
console.log(h.children); 
//if not any then empty html collection will be printed
console.log(h.childElementCount) 
//can also select ul
let ul = document.querySelector('ul');
ul.children; //has 3 [li, li , li]
ul.children[1].previousElementSibling;  //to get previous sibling
ul.children[1].nextElementSibling; // to get next sibling




//adding elements

//to create element
let new_p = document.createElement('p');
//can be created be cannot be seen until you assign it a value and then append it

//append for child
//like we need to append new p in body
let body_app = document.querySelector('body');
body_app.appendChild(new_p); //p inside body
//copies are not formed while doing this , jo hai vo bas wahin jaake append ho jata hai

let btn = document.createElement('button');
btn.innerText('FUCK ME!'); //YOU CAN ALSO DO THIS WITH HTML FILE AND WITH THIS

//WE CAN ALSO APPEND TEXT AND STRING
new_p.append('this is appended text');

//prepend  = jo first me add krta ho
new_p.prepend('this will be added in the starting')

//more precise
//insertAdjacent(where, element);
//go to mdn and try to understand




//removing elements , removeChild() , remove()
body_app.removeChild(new_p);
//or directly
new_p.remove();
//to fuck everything 
body.remove();