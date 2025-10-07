export {};
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// enum is a type only allow certian kind of options
// it is auto incremented value starting from 0
// if we want to start from 1 we can do like below
// enum Role {
//   ADMIN = 1,

let userRole: Role = 0; // 0 - admin, 1 - read only, 2 - author
console.log(userRole);
userRole = Role.READ_ONLY;
console.log(userRole);

// literal types - allow only specific values
let userRole1: "admin" | "editor" | "guest" = "admin";
// userRole1 = 'super-admin'  // error
userRole1 = "admin";

// here we can use union type also
let possibleRuslts: [1 | -1, number]; // [1,-1]
possibleRuslts = [1, 0];
possibleRuslts = [-1, 4];
console.log(possibleRuslts);

// type alias 

// In function parameter we can use literal type also but not recommended to use union type in many places
// so we can use type alias like below
function access(role: "admin" | "editor" | "guest") {
  //...
}

// using type alias
type Role1 = "admin" | "editor" | "guest";
let userRole2: Role1 = "admin";
function access1(role: Role1) {
  //...
}
// using type alias for object
type User = {
  name: string;
  age: number;
  role: Role1;
  permission: string[];
};

