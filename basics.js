"use strict";
exports.__esModule = true;
console.log("Hello, TypeScript!");
var userName = "Alice";
var userAge = 30;
console.log("Welcome, ".concat(userName, "!"));
var userNmae1 = "bob";
userNmae1 = "Bob";
console.log(userNmae1);
//function
function add(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
}
console.log(add(10, 20));
console.log(add(10));
