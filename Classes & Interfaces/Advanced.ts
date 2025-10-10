class User {
  constructor(private firstName: string, private lastName: string) {}
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
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim().length === 0) {
      throw new Error("First name cannot be empty");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim().length === 0) {
      throw new Error("Last name cannot be empty");
    }
    this._lastName = name;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  static eid = 'USER'
  static greet() {
    console.log('Hello there!');
  } // static method can be called without creating an instance of the class

}
console.log(Person.eid);
Person.greet(); // we can use in utility functions

const sasi = new Person();
sasi.firstName = "Sasidhar";
sasi.lastName = "S";
console.log(sasi.fullName);

// setters can be used to add validation or other logic when setting a property value.
// In the above example, the setters for firstName and lastName check if the provided name is not empty before assigning it to the private properties _firstName and _lastName.
// If an empty name is provided, an error is thrown.
// we used _before the property name because if we use the same name as the setter, it will cause a recursive call to the setter itself, leading to a stack overflow error.
// Using a different name (like _firstName) avoids this issue. 
// _ is a naming convention to indicate “private” or internal properties; it has no special meaning in TypeScript.`
// but it is a good practice to use it for private properties to differentiate them from public properties
// TypeScript now supports private keyword which enforces true privacy at compile-time.
// Also, the object itself can still access the private properties directly within the class methods.


// Static Properties and Methods
// Static properties and methods belong to the class itself rather than to any specific instance of the class.
// Static members cannot access instance properties (this.firstName) directly; 
// they only have access to other static members or receive instances explicitly. 
// They can be accessed directly on the class without creating an instance.