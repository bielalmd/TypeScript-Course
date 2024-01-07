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
const hobbies = ['Photography', 'Play Games'];
const activeHobbies = ['Trip'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: 'Gabriel',
    age: 26
};
const copiedPerson = Object.assign(Object.assign({}, person), { hobbies: 'Trip' });
console.log(person);
console.log(copiedPerson);
//# sourceMappingURL=app.js.map