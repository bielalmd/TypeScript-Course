"use strict";
const hobbies = ['Photography', 'Play Games'];
const activeHobbies = ['Trip'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: 'Gabriel',
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
const addedNumbers = add(5, 10, 15, 0);
const [hobby1, hobby2, ...remainsHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);
const { firstName: userName, age } = person;
console.log(userName, age, person);
//# sourceMappingURL=app.js.map