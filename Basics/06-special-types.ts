//null and undefined - specific types
// by default it will allow only null and undefined
let u: undefined = undefined;

// u = "hello"; // error
let n: null = null;

// if we want to allow string also we can do like below
let a: null| string;
a= "hello";
a= null;
// a= undefined; // error
