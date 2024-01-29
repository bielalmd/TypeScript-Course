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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Gabriel' }, { age: 26 });
console.log(mergeObj.age);
