function process(value: unknown) {
  // We need to perform type checking before using the value
  if (typeof value === "string") {
    console.log("String value: " + value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number value: " + (value * 2).toFixed(2));
  } else {
    console.log("Unknown type");
  }
}

// if we use `any` type it will not show any error (it will become a javascript)
// but it is not safe because we can perform any operation on it
// so it is better to use unknown type instead of any type
// if we did not perform type checking it will show error
// process(123);
// process("hello");
// process(true);
process({ name: "vijay" });

// unknown type is safer than any type because it forces us to perform type checking before using the value
// it helps to avoid runtime errors and makes the code more robust and maintainable. 