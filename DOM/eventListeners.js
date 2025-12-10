//button ke click hone pr multiple functons execute ho for that we use event listeners
//we mainly use event listeners for tracking any change made with mouse keyboard or curosr

let btn;
//btn.addEventListener("event",callback) , events can be of different types
//for single object we can create multiple event listeners
///better than onclick as in that only one property can be set at time
btn.addEventListener("click", function (){
    console.log("fucked");
})
btn.addEventListener("dblclick",sayhello);

function sayhello(){
    console.log("hello world");
};
//there are many different event listeners for different element go and search on mdn
//can also do the same for all html elements like p , div , class




//this in event listeners
//when this is used in callback of event handler of something it refers to that of something

let butn = document.querySelector("button");
butn.addEventListener("click",function(event){    //event is the default argument , for pointer cursor
    console.log(this); // will print the button in html format
    console.log(this.innerHTML);
    this.style.backgroundColor = "blue";
});
