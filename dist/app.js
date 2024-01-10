"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static crateEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReports() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    set mostRecentReports(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!!");
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
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
    addEmployee(name) {
        if (name === 'Gabriel') {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.crateEmployee('Marcelo');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('ad1', ['Biel']);
it.addEmployee('Gabriel');
it.addEmployee('Pedro');
it.printEmployeeInfo();
it.describe();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReports = 'Now i can see this';
accounting.addReports('Something its rong on the back end');
accounting.addEmployee('Gabriel');
accounting.addEmployee('Lucas');
accounting.describe();
//# sourceMappingURL=app.js.map