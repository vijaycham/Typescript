var inputElement = document.getElementById('user-name');
if (!inputElement) {
    throw new Error('Element not found');
}
console.log(inputElement);
// Error: Object is possibly 'null'.
// Error: Property 'value' does not exist on type 'HTMLElement'.
// To fix the error, we can use a type assertion to specify that inputElement is an HTMLInputElement.
var inputElementFixed = document.getElementById('user-name');
console.log(inputElementFixed.value);
