Class Properties, Getters, and Setters — Summary
1. Class Properties

Declared in constructor with access modifiers (TypeScript only)
```js
class User {
  constructor(private firstName: string, private lastName: string) {}
}
```

Shorthand: automatically declares and assigns properties.

Requires value at object creation.

Declared directly in class body (works in JS & TS)
```js
class Person {
  private _firstName: string = "";
  private _lastName: string = "";
} 
```


Properties can have default values.

Values can be assigned later via setters or methods.

TypeScript adds private/public; JS uses _ convention or # for privacy.

2. Getters (get)

Read or compute a property dynamically.

Accessed like a property, not a function.
```js
get fullName() {
  return `${this._firstName} ${this._lastName}`;
}
```


✅ Works in both JS and TS.

Do not require a value to be assigned at creation; they just return something based on existing properties.

3. Setters (set)

Write or validate property values.

Can assign values after object creation.
```js
set firstName(name: string) {
  if (!name.trim()) throw new Error("Cannot be empty");
  this._firstName = name;
}
```


✅ Works in both JS and TS.

Allows validation or logic before assigning a value.

Initial property values are optional if using setters.

4. Key Points
| Feature                        | Behavior                      | Initial value needed? | JS vs TS |
| ------------------------------ | ----------------------------- | --------------------- | -------- |
| `constructor + private/public` | Declare & assign              | Yes                   | TS only  |
| Class body properties          | Declare + optional default    | No                    | JS & TS  |
| `get`                          | Read/derive value dynamically | No                    | JS & TS  |
| `set`                          | Write/validate value          | No                    | JS & TS  |

5. Summary

User class: TypeScript shorthand using constructor parameters.

Person class: Properties declared in class body + setters/getters.

Both getters and setters exist in JS; TypeScript adds types and access modifiers.

Setters allow input/validation anytime after object creation; getters just read/derive values.