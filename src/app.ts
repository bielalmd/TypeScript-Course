class Departament {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Departament) {
        console.log(`Department: ${this.name}`);
    }
}


const accounting = new Departament('Accounting');
// console.log(accounting);

accounting.describe();

const accountingCopy = { name: 's', describe: accounting.describe}
accountingCopy.describe()