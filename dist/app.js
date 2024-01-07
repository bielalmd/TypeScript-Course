"use strict";
const userName = 'Gabriel';
let age = 26;
age = 28;
function add(a, b) {
    let result;
    result = a + b;
    return result;
}
const add1 = (a, b = 1) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add1(1));
//# sourceMappingURL=app.js.map