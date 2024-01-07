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

const add1 = (a: number, b: number = 1)  =>  a + b;
// default value in argument the have to be in last in the list

const printOutput: (a:number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button){
    button.addEventListener('click', event => console.log(event));
}

printOutput(add1(1))

// On TypeScript var is a global and function variable, so the TS identify var same as JavaScript
// So un TS we use variable calls 'let'