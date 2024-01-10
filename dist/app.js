"use strict";
class Departament {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new Departament('Accounting');
accounting.describe();
const accountingCopy = { name: 's', describe: accounting.describe };
accountingCopy.describe();
//# sourceMappingURL=app.js.map