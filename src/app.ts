interface Named {
    readonly name: string
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable, Named {
    name: string;
    age: number;
    
    constructor(n: string, agr: number) {
        this.name = n;
        this.age = agr;
    }
    
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

let use1: Greetable;

use1 = new Person('Gabriel', 26)



use1.greet('Hi this is me');
console.log(use1);