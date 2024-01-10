class Departament {
    name: string;
    private employees: string[] = []

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Departament) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


const accounting = new Departament('Accounting');
// console.log(accounting);

accounting.addEmployee('Gabriel');
accounting.addEmployee('Pedro');
// accounting.employees[2] = 'Gabriela'
accounting.printEmployeeInfo()

accounting.describe();

// const accountingCopy = { name: 's', describe: accounting.describe}
// accountingCopy.describe()