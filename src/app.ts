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

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ${obj[key]}`;
}


extractAndConvert({name: 'Gabriel'}, 'name');

class DataStorage {
    private data: (string | number | boolean) [] = [];

    addItem(item: string | number | boolean) {
        this.data.push(item);
    }

    removeItem(item: string | number | boolean) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return {...this.data}
    }
}

const textStorage = new DataStorage()
textStorage.addItem('Gabriel');
textStorage.addItem('Pedro');
textStorage.removeItem('Pedro');
console.log(textStorage.getItems());

const numberStorage = new DataStorage();

// const objStorage = new DataStorage<object>();
// const gabrielObj = { name: 'Gabriel'}
// objStorage.addItem({name: 'Gabriel'});
// objStorage.addItem({name: 'Mateus'});
// //...
// objStorage.removeItem(gabrielObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date; 
}

function creatCourseGoal(
    title: string, 
    description: string,
    date: Date
    ): CourseGoal {
    let courseGoal: Partial<CourseGoal>  = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Gabriel', 'Mates'];
// names.push('Manu');

