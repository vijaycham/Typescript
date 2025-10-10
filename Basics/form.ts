export {};

// Example of Type Assertion in TypeScript
// Assume we have an HTML input element with id 'user-name'
const inputElement = document.getElementById("user-name")!;
// if(!inputElement) {
//     throw new Error('Element not found');
// }
// console.log(inputElement.value);
// Error: Object is possibly 'null'.
// Error: Property 'value' does not exist on type 'HTMLElement'.
// To fix the error, we can use a type assertion to specify that inputElement is an HTMLInputElement.
const inputElementFixed = document.getElementById(
  "user-name"
) as HTMLInputElement;
console.log(inputElementFixed.value);
// Now, TypeScript knows that inputElementFixed is an HTMLInputElement and has a value property.

const inputElement1 = document.getElementById("user-name")!;
// - ! is a non-null assertion operator, it tells TypeScript that inputElement1 will never be null or undefined.
// console.log(inputElement1?.value);
// - ? is an optional chaining operator, it tells TypeScript to only access the property if the object is not null or undefined.

// Note: Type assertions do not perform any runtime checks or conversions. They are purely a compile-time construct to help the TypeScript compiler understand the type of a variable.

// value error - unknown type
// value does not exist on type 'HTMLElement'. which is a parent type of HTMLInputElement
// so we need to tell typescript that this is an HTMLInputElement

