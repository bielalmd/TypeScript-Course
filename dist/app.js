"use strict";
const userName = 'Gabriel';
let age = 26;
age = 28;
const hobbies = ['Photography', 'Play Games'];
const activeHobbies = ['Trip'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: 'Gabriel',
    age: 26
};
const copiedPerson = Object.assign(Object.assign({}, person), { hobbies: 'Trip' });
const add = (...num) => {
    return num.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const concatStrings = (...strings) => {
    return strings.reduce((s1, s2) => {
        return s1 + s2;
    }, 'hi: ');
};
const addStringNames = concatStrings('Gabriel ', 'And ', 'Gabriela');
console.log(addStringNames);
const addedNumbers = add(5, 10, 15, 0);
console.log(addedNumbers);
//# sourceMappingURL=app.js.map