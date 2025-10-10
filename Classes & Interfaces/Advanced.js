"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    } //property which has its value derived on the fly when accessed
}
const vijay = new User("Vijay", "S");
console.log(vijay.fullName); // Accessing the fullName property
//console.log(vijay.fullName()); // Error: fullName is not a function
// Getters and Setters
// Getters and setters are special methods that provide controlled access to the properties of a class.
// A getter allows you to define a method that is accessed like a property, while a setter allows you to define a method that is used to set the value of a property.
// setters
class Person {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim().length === 0) {
            throw new Error("First name cannot be empty");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim().length === 0) {
            throw new Error("Last name cannot be empty");
        }
        this._lastName = name;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
const sasi = new Person();
sasi.firstName = "Sasidhar";
sasi.lastName = "";
console.log(sasi.fullName);
//# sourceMappingURL=Advanced.js.map