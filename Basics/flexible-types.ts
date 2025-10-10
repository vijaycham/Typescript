export {}
// any type

let age: any = 36

age = '37'
age = false
age = {}
age= []
// using any will give a js feutres and negative to ts

//Union type - if required two or more type - flexible  

let age1 : string| number = 36;

age1 = "37";
// below will show error, it will allow only string or number
//  age1 = false; 
//  age1 = {}; 
//  age1 = [];

console.log(age1)

