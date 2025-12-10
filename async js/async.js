//creating async functions
//write async in front of function
//==========by default they will always return promise ================ then we can apply then and catch method
async function greet(params) {
    throw "use it to throw error";
    return 'hello';
};
//will return a promise with state fulfilled
//if you write something rubbish it wil return rejected state
greet()
.then((result)=>{ //jo result return hoke aai ga hello
    console.log("done");
    console.log(result);
})
.catch((err)=>{
    console.log("caught something",err);
});


//creating async arrow function
let demo = async ()=>{return 4};  //will always return promise







//await (only use await in async function)
//ass pass ke saare async function ko rokega jab tak current function call is settled nhi ho jaati (resolve or rejected)

function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
};

async function demo() {
    //handle rejections using try and catch
    //poromises can be rejected so dont forget to use it
    
    try{
        //they will all print at the same time to avoid that use await or 
        //when we want first task to get resolved then proceed to next task 
        await getNum(); //jab tk ye resolve nhi hoga tab tak next task proceed nhi hoga
        getNum();
        getNum();
    }catch(error){
        console.log(error);
        console.log("your error");
    };
};

//instead of using .then chain , we can use async and await to same shit , as both of them return and work on promise
//and logically kind of same both of them but async is more optimized and better way to do things
