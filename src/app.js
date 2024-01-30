// const names: Array<string> = []
// // names[0].split('');
// // console.log(names);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function countAndPrint(element) {
    var descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndPrint(['photograhpy', 'Playing football']));
function extractAndConvert(obj, key) {
    return "Value: ".concat(obj[key]);
}
extractAndConvert({ name: 'Gabriel' }, 'name');
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __assign({}, this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Gabriel');
textStorage.addItem('Pedro');
textStorage.removeItem('Pedro');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
function creatCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names = ['Gabriel', 'Mates'];
// names.push('Manu');
