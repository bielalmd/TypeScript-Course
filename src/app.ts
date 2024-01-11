interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let use1: Person;

use1 = {
    name: 'gabriel',
    age: 26,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

use1.greet('Hi this is me')