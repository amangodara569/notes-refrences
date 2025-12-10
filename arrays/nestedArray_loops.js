let arr = [[1,2], [3,4,5]]
console.log(arr[1].length)

//to access individual value in nested array
console.log(arr[0][1]) //first array ka 1 index wala element

//imagine nested arrays in form of matrix
//where no of arrays = rows , and their positioning is same as that of matrix
//only way to access the matrix

for( let i = 1; i<=5; i++){
    for( let j = 1; j<=3; j++){
        console.log(i)
    }
}


//write favourite movie code


//loops with nested arrays

let heros = [["spiderman", "superman","thor"],["hulk","hawkeye","panther"]]
for (let i =0 ; i<heros.length;i++){
    console.log(heros[i]) //output = will be two nested array
    for (let j=0 ; j<heros[i].length; j++){ //heros[i] , talking about nested array
        console.log(heros[i][j]) //which is the syntax to print nested array
        console.log(`j=${j}, ${heros[i][j]}`) //print formatiing in js with tilde and $
    }
}



//for of loops
//when we need to access the item from collection of items (for arrays and strings)


// for (letter of 'amangodara'){
//     console.log(letter);
// }

for (hero of heros){
    console.log(`${hero}`)
    for(i of hero){
        console.log(i)
    }
}
