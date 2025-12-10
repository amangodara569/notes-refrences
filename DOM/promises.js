//instead of writing normal things we use call backs , a more professional way to do things
function doSomething(data,success,failure){// enter callbacks as arguments
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if (internetSpeed> 4){
        success();  // created a callback function
    }else{
        failure();
    }
};
doSomething("hello",()=>{
    console.log("its done");
},()=>{
    console.log("it failed");
});
//we passes two callbacks




//the promise object represents eventual completion(or failure) of an asynchronous operation and its resulting value



//after using promises
function doSomething(data){
    return new Promise((success,failure)=>{  //use resolve and reject instead of success failure
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed>4){
            success();
        }else{
            failure("weak connection");
        }
    });
    
   
};

//it will save us from nested callback hell to a limit (use at that time)
//multiple states of promise ; 
    //pending , rejected , fulfilled(resolved)


//methods of promise object then(what to do after resolved)  , catch(to catch the issue)

let request = doSomething("hi");
request.then(()=>{
    console.log("promise was resolved"); //if the request is fulfilled then this will run
})
.catch(()=>{ //this is the syntax dont need to write request.catch !!
    console.log("ther was a problem");//the request is rejected then this will run
});


//more compact way to do this
doSomething("hi") //directly applyihg operation on that function
    .then(()=>{
    console.log("promise was resolved");
})
    .catch(()=>{ 
    console.log("ther was a problem");
});




//promise chaining , improved version of callbacks  like using multiple thens
doSomething("hi")
    .then(()=>{
        console.log("data 1 saved");
        doSomething("by")
            .then(()=>{ //har nested then ke andar 2 conditions hogi either it will pass or fail
                console.log("data 2 saved");
            })
    })
    .catch(()=>{
        console.log("caught error"); //this single catch will caught from both then
    });


//nested callback na lge
doSomething("hi")
    .then((result)=>{ //
        console.log("data 1 saved");
        console.log(result);
         return doSomething("by")
    })//it will return for data 2 and on that 
    .then(()=>{//we will apply this then ,now its not nested
        console.log("data 2 saved");
        return doSomething("3rd chain");
    })
    .then(()=>{
        console.log("saved data 3");
    })
    .catch((error)=>{
        console.log("caught error");
        console.log(error);
    });    
//this is chaining    
//most optimized way of callback hell code

    


//promises are rejected and resolved with some data (valid results or errors)
//data saved is result and unable to save is error



//change this shit using promise

function changeColor(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color = color;
        nextColor(); //sabse phele userinput wala color use hoga then jo next color me call back initiated hai vo hoga
    },delay);
};


function changeColor(color,delay,){
  return new Promise((resolve,reject)=>{  //parameters of promise are used as fucntions in code
    setTimeout(() => {
        h1.style.color = color;
        resolve("color changed");
    },delay);
  })
};

//return new promise , promise return hoga to uspe .then use krange and usme .catch se error catch krange
changeColor('red',1000)
.then(()=>{
    console.log("color changed");
    return changeColor("yellow",2000);
})
.then(()=>{
    console.log("new color => yellow");
    return changeColor("blue",1000);
})
.catch((error)=>{
    console.log(error);
    console.log("there was an error");
});