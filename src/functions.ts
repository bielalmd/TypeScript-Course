function add(n1: number, n2: number) {
    return n1 + n2
}

// function printResult(num: number): void {
//     console.log(`Result: ${num}`);
// }

function addAndHandle(n1: number, n2: number, callBack: (num: number) => void) {
    const result = n1 + n2;
    callBack(result)
}

// printResult(add(10, 15))

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

// console.log(combineValues(5, 5));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
    console.log(result);
})