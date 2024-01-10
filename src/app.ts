class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = []

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
    private lastReport: string;

    get mostRecentReports() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!')
    }

    set mostRecentReports(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value!!");
        }
        this.addReports(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if(name === 'Gabriel') {
            return;
        }
        this.employees.push(name);
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
accounting.mostRecentReports = 'Now i can see this';
accounting.addReports('Something its rong on the back end');
console.log(accounting.mostRecentReports);

accounting.addEmployee('Gabriel');
accounting.addEmployee('Lucas');
accounting.printReports();
accounting.printEmployeeInfo()

// const accountingCopy = { name: 's', describe: accounting.describe}
// accountingCopy.describe()