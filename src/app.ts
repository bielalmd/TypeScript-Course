class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department) {
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

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReports(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}


const it = new ITDepartment('ad1', ['Biel']);
// console.log(it);

it.addEmployee('Gabriel');
it.addEmployee('Pedro');
// it.employees[2] = 'Gabriela'
it.printEmployeeInfo()

it.describe();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReports('Something its rong on the back end');
accounting.printReports();

// const accountingCopy = { name: 's', describe: accounting.describe}
// accountingCopy.describe()