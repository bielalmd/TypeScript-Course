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
var result = add('Max', 'Sherek');
console.log(result);
result.split(' ');
console.log(result);
// console.log(add('1', '2'));
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInfo(emp: UnknownEmployee) {
//     console.log(`Name: ${emp.name}`);
//     if ('privileges' in emp) {
//         console.log(`Privileges: ${emp.privileges}`);
//     }
//     if ('startDate' in emp) {
//         console.log(`Start Date: ${emp.startDate}`);
//     }
// }
// printEmployeeInfo({name: 'Gabriel', startDate: new Date()});
// class Car {
//     drive() {
//         console.log(' Driving...');
//     }
// }
// class Truck {
//     drive() {
//         console.log(' Driving a truck...');
//     }
//     loadCargo(amount: number) {
//         console.log(`Loading cargo... ${amount}`);
//     }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }
// useVehicle(v1)
// useVehicle(v2)
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }
// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//         break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log(`Moving at speed ${speed}`);
// }
// moveAnimal({type: 'bird', flyingSpeed: 10});
// // const userInputEl = <HTMLInputElement> document.getElementById('inputID')!;
// const userInputEl = document.getElementById('inputID');
// if(userInputEl) {
//     (userInputEl as HTMLInputElement).value = 'Hi'
// }
// interface ErrorContainer { // {email: 'Not a valid email', userName: 'Must start with a caracter'}
//     [prop: string]: string
// }
// const errorBag: ErrorContainer = {
//     email: 'Is not a valid email',
//     userName: 'Must start with a capital caracter'
// };
