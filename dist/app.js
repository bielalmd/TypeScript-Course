"use strict";
class Departament {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Departament('Accounting');
accounting.addEmployee('Gabriel');
accounting.addEmployee('Pedro');
accounting.printEmployeeInfo();
accounting.describe();
//# sourceMappingURL=app.js.map