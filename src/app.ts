const userName = 'Gabriel';

// userName = 'Pedro';

let age = 26;

age = 28;

function add(a: number, b: number) {
    let result;
    result = a + b;
    return result;
}

// console.log(result);

// if(age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

const add1 = (a: number, b: number)  =>  a + b;
console.log(add1(10,20));

// On TypeScript var is a global and function variable, so the TS identify var same as JavaScript
// So un TS we use variable calls 'let'