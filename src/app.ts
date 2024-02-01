function Logger(constructor: Function) {
    console.log('Loading...');
    console.log(constructor);
}
@Logger
class Person {
    name ='Gabriel';

    constructor() {
        console.log('Creating a person obj');
    }
}

const pers = new Person();

console.log(pers);