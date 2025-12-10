let student = {
    eng:23, 
    phy:32,
    math:94,
    getAvg(){
        console.log(this);
        //we cannot get direct access of the method variables, thats why we use this
        let result = (this.eng+this.phy+this.math)/3;
        //this keyword refers to an object that is executing in current piece of code
        console.log(`${this.name} got and average of ${result}`)

    }


}
function faaltu(){
    console.log(this);
    ///output window object, highest of all object , in which all the code is written
}
faaltu();    


//this in arrow function

//arrows use lexical scope so 
//arrow function ka scope parent funciton wala hi hota hai

//pending