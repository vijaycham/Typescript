"use strict";
exports.__esModule = true;
var hobbies = ["Sports", "Cooking"]; // ts identiy it is string, we can see while hover
// hobbies.push(10)
var users;
users = [1, "sasi"];
users = ["barath", 5];
// alternative ways of defining the type
var users1;
users1 = [1, "sasi"];
users1 = ["barath", 5];
//tupels
var possibleRuslts; // it will act as fixed length
possibleRuslts = [1, 0];
possibleRuslts = [1, 4];
console.log(possibleRuslts);
// objects
var user = {
    name: 'vijay',
    age: 27,
    hobbies: ["cooking", 'coding'],
    role: {
        description: 'scientist',
        id: 456
    }
};
var val = 'some text';
//let val: {} = {};
// val:{}   it is not object type.... we can use any type here.. it is a  value
console.log(val); // it will not show error but it is not recommended to use empty object type
// Record type
// normal object in js
var someObject = { name: 'John',
    age: 30,
    1: true
};
var data;
data = {
    name: 'sasi',
    age: 25
};
// we use record type when we are not sure about the key name but we know the key type and value type
console.log(data);
