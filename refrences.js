// we can distinguish arrays form address in memory

//array ki value (==) and array itself (===) both cannot be same no matter what
//arrary creation ke baad refrence variable create hota hai , array ki exactr location kuch or hoti hai
//hm value nhi address compare krte hain thats why it is always false
let arr = [1,2,3];
let arr_copy = arr;
//now they will be equal as they are pointing towards same address in memory
//changes made in either of the arry will reflect in both
//we can change the value of const variable but cant its address