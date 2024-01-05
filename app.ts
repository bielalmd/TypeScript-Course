type Combinable = number | string;
type ConversionDesc = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDesc) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; // case you pass the input like a string won't to be possible a assignable with name like 'max' and the logic convert to a NaN
    } else {
        result = input1.toString() + input2.toString();
    }
    return result

    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combineAges = combine(32, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('32', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Gabriel ', 'Gabriela', 'as-text');
console.log(combineNames);