//events are signals that something has occured (user inputs / actions)


//from html file 
//      with property onlick = "console.log(the button was click)"  (while creating a button)


let btn = document.querySelector('button');
console.dir(btn); //events wali property on se start hogi


let btns = document.querySelectorAll('button');
for(btn of btns){
    btns.onclick(sayhello);
  
}
function sayhello(){
    alert('button was clicked');
    btns.onmouseenter('you entered a button');

};