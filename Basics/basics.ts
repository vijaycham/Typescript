export {};

console.log("Hello, TypeScript!");

let userName: string = "Alice";
let userAge = 30;

console.log(`Welcome, ${userName}!`);

let userNmae1 = "bob"

userNmae1 = "Bob";  
console.log(userNmae1);

//function

function add(a : number, b = 5) {
    return a + b;
}
 console.log(add(10, 20));
 console.log(add(10));
 // console.log(add(10,'20')); // error
// console.log(add(10,true)); // error


// any type
let age : any = 25;
age = "25 years";
age = true;
// it will not show error but it is not recommended to use any type
