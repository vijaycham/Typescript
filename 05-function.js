"use strict";
exports.__esModule = true;
// // function with types
// // we can define return type also, that is optional because ts will identify the return type based on the return value
// // but it is good to define the return type also like below
// function add(a: number, b: number): string {
//   // return a + b;  it will show error because it is number type but we are returning string type
//   // below are some of the ways to convert number to string
//   return (a + b).toFixed();
//   return (a + b).toString();
//   return a + b + "";
//   return String(a + b);
//   //
// }
// console.log(add(10, 20));
// // console.log(add(10,'20')); // error
// // function with void type - if function not return anything
// function printResult(num: number): void {
//   console.log("Result: " + num);
// }
// printResult(5); // it will return undefined
// // if we try to return something it will show error because it is void type
// ;
// const result = printResult(5);
// console.log(result); // Output: undefined
// // void functions can perform actions, but they don’t return a usable value.
// // Assigning their result to a variable will always give you undefined.
// // never type - if function never return anything
// function logAndThrow(errorMessage: string): never {
//   console.log(errorMessage);
//   throw new Error(errorMessage);
//   // while we use throw it will not return anything so we can use never type
//   // below will show error because it is unreachable code
//   // return 1;
// }
// const result1 = logAndThrow("An error occurred!");
// console.log(result1); // it will not show anything because it will throw error and stop the execution
// // never type is used in functions that always throw an error or have infinite loops.
// // It indicates that the function will never complete its execution normally,
// // and therefore, it won't return any value to the caller.
// // difference between void and never
// // A function with a void return type can complete its execution and return undefined,
// // whereas a function with a never return type will never complete its execution normally,
// // either by throwing an error or entering an infinite loop.
// // we can use never type in below cases
// // 1. Function that always throws an error
// // 2. Function with an infinite loop
// // 3. Exhaustive type checking in switch statements
// // 4. Unreachable code
// // In general, use void for functions that perform actions without returning a value,
// // and use never for functions that will never complete normally.
// Function as types
var logMsg = function (message) {
    console.log(message);
};
// here we are assigning function to a variable so we need to define the type of function
// () = void , this is the way to define function type
function performJob(cb) {
    //...
    cb("job done");
}
performJob(logMsg);
var user1 = {
    name: "vijay",
    age: 25,
    greet: function () {
        console.log("hello");
        return this.name;
    }
};
console.log(user1);
user1.greet("hi");
console.log(user1.greet("hi"));
