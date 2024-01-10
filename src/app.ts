abstract class Department {
    static fiscalYear = 2020;
    // private id: string;
    // private name: string;
    protected employees: string[] = []

    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static crateEmployee(name: string) {
        return { name: name }
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log(`IT Department ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

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

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log(`Accounting Department - ID ${this.id}`);
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

const employee1 = Department.crateEmployee('Marcelo');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('ad1', ['Biel']);
// console.log(it);

it.addEmployee('Gabriel');
it.addEmployee('Pedro');
// it.employees[2] = 'Gabriela'
it.printEmployeeInfo()

it.describe();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReports = 'Now i can see this';
accounting.addReports('Something its rong on the back end');
// console.log(accounting.mostRecentReports);

accounting.addEmployee('Gabriel');
accounting.addEmployee('Lucas');

// accounting.printReports();
// accounting.printEmployeeInfo();

accounting.describe()

// const accountingCopy = { name: 's', describe: accounting.describe}
// accountingCopy.describe()