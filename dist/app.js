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
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
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
const it = new ITDepartment('ad1', ['Biel']);
it.addEmployee('Gabriel');
it.addEmployee('Pedro');
it.printEmployeeInfo();
it.describe();
console.log(it);
const accounting = new AccountingDepartment('d2', []);
accounting.addReports('Something its rong on the back end');
accounting.addEmployee('Gabriel');
accounting.addEmployee('Lucas');
accounting.printReports();
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map