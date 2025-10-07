function generateError(message?: string){
  throw new Error(message);
}
generateError("An error occurred!");
// generateError(); // it will show error because message is optional and it will be undefined
// but we are throwing it and it will be of type undefined
// so we can make message parameter as optional by adding ? after the parameter name
// now it will not show error because message can be string or undefined    
// we can also define the return type of the function as never because it will never return anything

//use case in type 

type User = {
  name: string;
  age: number;  
    address?: string; // optional property
    role?: "admin" | "user" | "guest"; // optional property with specific string values
}

let user1: User = {
  name: "vijay",
  age: 25,
};
console.log(user1);