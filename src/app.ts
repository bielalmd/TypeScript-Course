function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);     
    }
}
@Logger('LOGGIN - PERSON')
class Person {
    name ='Gabriel';

    constructor() {
        console.log('Creating a person obj');
    }
}

const pers = new Person();

console.log(pers);