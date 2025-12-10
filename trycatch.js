try{
    console.log(a);
}catch(orgError){
    console.log("a is not defined !!!!");
    //use parameter to catch original error
    console.log(orgError);
}finally{
    console.log("fuck you bitch")
}