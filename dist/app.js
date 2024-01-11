"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, agr) {
        this.name = n;
        this.age = agr;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let use1;
use1 = new Person('Gabriel', 26);
use1.greet('Hi this is me');
console.log(use1);
//# sourceMappingURL=app.js.map