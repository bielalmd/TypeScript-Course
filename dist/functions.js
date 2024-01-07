"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void {
//     console.log(`Result: ${num}`);
// }
function addAndHandle(n1, n2, callBack) {
    const result = n1 + n2;
    callBack(result);
}
// printResult(add(10, 15))
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
// console.log(combineValues(5, 5));
// let someValue: undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
});
