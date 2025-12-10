/// javascript is single threaded 
//mtlb ek time pr code ki ek hi cheej execute hogi


//callback hell
//like when we need to do one thing then after one second another then after one second another like to change color

//so what we can do 
h1 = document.querySelector("h1");
h1.style.color = "red";

setTimeout(()=>{
    h1.style.color = "brown";
},1000);  //a callback

setTimeout(()=>{
    h1.style.color = "yellow";
},2000);  //another callback
//if you set tiem to one then you will never be able to see previous color




//a better way to do this create a funciton color
function changeColor(color){
    h1.style.color = color;
};

setTimeout(changeColor('red'),1000);
setTimeout(changeColor('blue'),2000);




//pro level shit
//create a callback within the fucntion
function changeColor(color,delay){
    setTimeout(()=>{
        h1.style.color = color;
    },delay);
};

changeColor("red",1000);
changeColor("pink",2000);
changeColor("black",3000);




//ultra pro max level shit

function changeColor(color,delay,nextColor){ //entere callback of same function in place of next color
    setTimeout(()=>{
        h1.style.color = color;
        nextColor(); //sabse phele userinput wala color use hoga then jo next color me call back initiated hai vo hoga
    },delay);
};
changeColor("red",1000,()=>{
    changeColor("black",1000,()=>{
        changeColor("yellow",1000);
    });  //added another callback 
});
//mtlb phele red vo execute ho fir ek second baad black fir vo execute ho fir ek second baad yellow bc bhai

//is  chutiyap se bachne ke liye we use promises await (almost bach jaate hai )
//thing with callback is that if the first task is done then only second task will be doable