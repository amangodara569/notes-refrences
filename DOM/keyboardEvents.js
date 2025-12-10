//when we enter someting from keyboard 
let inpt = document.querySelector("input");
inpt.addEventListener("keydown",function(event){  //for more events see mdn
    console.log("key was pressed");
    console.log(event)  //konsa event kaam kr rha hai
    console.log(event.key);
    console.log(this.code);  //will this work instead of event
});

//there are two special arguments in event for keyboard = key(which key pressed) and code(exact code for that character)






//event listeners for form 
let forum = document.querySelector("form");
forum.addEventListener("submit", function(event){
    event.preventDefault();  //method used to stop default things from running (usually in html)
    console.log("form submitted");
    alert('hogya bc');
})

//to extract form data
//console.log(inpt.value);  to print the value entered in input
//console.dir(inpt); to see all possible properties




//