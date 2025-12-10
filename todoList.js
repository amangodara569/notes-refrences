//creating a simple to do list
let todo = [];
console.log("welcome")
console.log("different types of task that you can perform:-");
console.log("--add--");
console.log("--delete--");
console.log("--show current list--");
console.log("--quit--");
let task = prompt("enter your task:");

while(true){
    if(task.toLowerCase() !="quit"){
        if(task.toLowerCase == "add"){

            let addName = prompt("enter your task name");
            todo.push(addName);


            console.log("your list-");

            
            for (let i =0; i<todo.length;i++){
                console.log(`${i}, ${todo[i]}`);
            }

        }else if (task.toLowerCase == "show current list"){

            for (let i =0; i<todo.length;i++){
                console.log(`${i}, ${todo[i]}`);
            }

        }else if (task.toLowerCase == "delete"){
            let ind = prompt("enter the serial no. of that task:");
            todo.splice(ind,1);

            console.log("your updated list:-")

             for (let i =0; i<todo.length;i++){
                console.log(`${i}, ${todo[i]}`);
            }
        }
    }else{
        console.log('quitting ....');
        console.log("done !");
        break;   }
}
console.log("thanks for using the app!!!")
