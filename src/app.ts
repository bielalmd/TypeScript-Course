class Departament {
    // private id: string;
    // private name: string;
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Departament) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


const accounting = new Departament('ad1', 'Accounting');
// console.log(accounting);

accounting.addEmployee('Gabriel');
accounting.addEmployee('Pedro');
// accounting.employees[2] = 'Gabriela'
accounting.printEmployeeInfo()

accounting.describe();

// const accountingCopy = { name: 's', describe: accounting.describe}
// accountingCopy.describe()