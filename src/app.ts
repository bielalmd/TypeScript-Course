// const names: Array<string> = []
// // names[0].split('');
// // console.log(names);

// const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is over!!!')
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign( objA, objB)
}

const mergeObj = merge({name: 'Gabriel'}, {age: 26});
console.log(mergeObj.age);

interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndPrint(['photograhpy','Playing football']));
