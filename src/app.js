var e1 = {
    name: 'Gabriel',
    privileges: ['creat-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add('1', '2'));
function printEmployeeInfo(emp) {
    console.log("Name: ".concat(emp.name));
    if ('privileges' in emp) {
        console.log("Privileges: ".concat(emp.privileges));
    }
    if ('startDate' in emp) {
        console.log("Start Date: ".concat(emp.startDate));
    }
}
printEmployeeInfo({ name: 'Gabriel', startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log(' Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log(' Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo... ".concat(amount));
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed ".concat(speed));
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
// const userInputEl = <HTMLInputElement> document.getElementById('inputID')!;
var userInputEl = document.getElementById('inputID');
if (userInputEl) {
    userInputEl.value = 'Hi';
}
