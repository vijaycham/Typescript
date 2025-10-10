# TypeScript Notes: void, never, optional parameters & properties

---

## 1. The `generateError` function

```ts
function generateError(message?: string) {
  throw new Error(message);
}
generateError("An error occurred!");
```

### Explanation:

* `message?: string` → parameter can be **string** or **undefined**.
* `throw new Error(message)` **always throws**, so the function **never returns normally**.

### With explicit `never` type:

```ts
function generateError(message?: string): never {
  throw new Error(message);
}
```

* `never` means the function **never reaches the end normally** (always throws or loops forever).

### Usage in type safety:

```ts
function handleRole(role: "admin" | "user" | "guest") {
  switch (role) {
    case "admin":
      console.log("Admin access");
      break;
    case "user":
      console.log("User access");
      break;
    case "guest":
      console.log("Guest access");
      break;
    default:
      const neverValue: never = role; // ensures all cases are handled
      throw new Error(`Unhandled role: ${role}`);
  }
}
```

---

## 2. Optional properties in types

```ts
type User = {
  name: string;
  age: number;
  address?: string; // optional property
  role?: "admin" | "user" | "guest"; // optional property with specific string values
};

let user1: User = {
  name: "vijay",
  age: 25,
};

console.log(user1);
// Output: { name: "vijay", age: 25 }
```

### Explanation:

* `?` makes a property **optional**.
* You can include it or skip it in object creation.

```ts
let user2: User = {
  name: "rahul",
  age: 30,
  role: "admin",
};
```

---

## 3. Summary Table

| Concept     | Meaning                                                     | Example                                               |
| ----------- | ----------------------------------------------------------- | ----------------------------------------------------- |
| `?:`        | Optional parameter/property                                 | `message?: string`                                    |
| `never`     | Function never returns                                      | `function throwError(): never { throw new Error(); }` |
| `void`      | Function returns nothing (undefined)                        | `function log(): void { console.log("Hi"); }`         |
| `undefined` | Default return of a function that doesn't explicitly return | `function f() {}`                                     |

---

*End of Notes*
