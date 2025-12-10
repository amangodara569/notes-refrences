let students =["aman","rajat","jai"];
//to add any elemet at last
// students.push('amna')
// console.log(students)
//to add in the starting 
// students.unshift("bjk")
// students.shift()
// console.log(students)

// students.pop()
// students.includes("bool, whether it contains or not")
// teacher =['am','sdf']
//if we want ot concat two arrays
// students.concat(teacher)
//if we want ot print array in reverse
// students.reverse()

//we also have .replace('a', 'b')
//name.repeat(3)  repeat name 3 times
students.splice(1,1,"added")
console.log(students)
//1 index se start krna hai 1 element delete krna hai
//then usjagah "added"krna hai
students.splice(1,0,"add2")
//1 st index se start krna hai 0 kuch nhi delete krna and 1st index pr add2 add krna hai
console.log(students)