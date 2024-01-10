"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
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
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReports = 'Now i can see this';
accounting.addReports('Something its rong on the back end');
console.log(accounting.mostRecentReports);
accounting.addEmployee('Gabriel');
accounting.addEmployee('Lucas');
accounting.printReports();
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map