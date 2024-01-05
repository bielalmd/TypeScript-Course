function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: ".concat(num));
}
function addAndHandle(n1, n2, callBack) {
    var result = n1 + n2;
    callBack(result);
}
printResult(add(10, 15));
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
// console.log(combineValues(5, 5));
// let someValue: undefined;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
