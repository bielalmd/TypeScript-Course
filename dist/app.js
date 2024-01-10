"use strict";
class Departament {
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
const accounting = new Departament('ad1', 'Accounting');
accounting.addEmployee('Gabriel');
accounting.addEmployee('Pedro');
accounting.printEmployeeInfo();
accounting.describe();
//# sourceMappingURL=app.js.map