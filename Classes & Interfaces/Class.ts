// Classes are a template for creating objects. we can say blueprints for creating objects.
// They encapsulate data with code to work on that data.
// In TypeScript, you can define properties and methods within a class.

// JavaScript class
class User {
  constructor(name: string, age: number) {
    // this.name = "Vijay";
    // this.age = 22;
  }
}
new User("vijay", 22);

// TypeScript class
class User1 {
  // initializing the properties
  name: string;
  age: number;
  constructor(name: string, age: number) {
    // assigning the values
    this.name = name;
    this.age = age;
  }
}

// TypeScript also provides a shorthand for initializing and assigning properties directly in the constructor parameters using access modifiers (public, private, protected, readonly).
class User2 {
  // public hobbies: string[] = []; Actually we can use public here also but not private or protected
  // because private and protected are only accessible within the class or its subclasses.
  // assigning a string[] to hobbies property, even if we don't assign it will be undefined
  // but if we assign it will be an empty array

  constructor(public name: string, private age: number) {
    // No need to explicitly declare and assign properties
  }
} // public can be accessed anywhere, private can be accessed only within the class,
// protected can be accessed within the class and its subclasses
const vijay = new User2("Vijay", 22);
console.log(vijay);

// Properties that are marked as public can be accessed from anywhere, including outside the class.
// Properties marked as private can only be accessed within the class they are defined in.
// Properties marked as protected can be accessed within the class and its subclasses.
// Readonly properties can only be assigned during initialization or in the constructor. They cannot be modified afterwards. 

