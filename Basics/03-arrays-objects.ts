export {};

let hobbies = ["Sports", "Cooking"]; // ts identiy it is string, we can see while hover

// hobbies.push(10)

let users: (string | number)[];
users = [1, "sasi"];
users = ["barath", 5];

// alternative ways of defining the type

let users1: Array<string | number>;
users1 = [1, "sasi"];
users1 = ["barath", 5];

//tupels

let possibleRuslts: [number, number]; // it will act as fixed length

possibleRuslts = [1, 0];
possibleRuslts = [1, 4]
console.log(possibleRuslts);

// objects
let user: {
    name: string,
    age: number
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }

} = {
    name: 'vijay',
    age: 27,
    hobbies : ["cooking", 'coding'],
    role: {
        description: 'scientist',
        id:456
    }
};

let val: {} = 'some text'
//let val: {} = {};
// val:{}   it is not object type.... we can use any type here.. it is a  value
console.log(val) // it will not show error but it is not recommended to use empty object type


// Record type
 // normal object in js
const someObject = {    name: 'John',
    age: 30, // here, key age is a string
    1: true, // here, key 1 is a number
}
let data: Record<string, number | string>
 
data = {
    name: 'sasi',
    age: 25
}

// we use record type when we are not sure about the key name but we know the key type and value type
console.log(data)

