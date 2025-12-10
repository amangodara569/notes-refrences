
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');
btn.addEventListener('click',async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    getCLGinfo(country);
});

async function getCLGinfo(country){
    try{
        let res = await axios.get(url + country);
        console.log(res.data); 
    } catch(e){
        console.log("error is " + e);
    }
};
//import axion on html using cdn

 