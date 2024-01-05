// const person: {
//     name: string,
//     age: number
// } = {

// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Gabriel',
//     age: 30,
//     hobbies: ['Photography', 'Sports'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Gabriel',
    age: 30,
    hobbies: ['Photography', 'Sports'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoritePhotos: string[]
favoritePhotos = ['Sky']

console.log(person);
console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if (person.role === Role.AUTHOR) {
    console.log('Its author');
} else {
    console.log('Its not author');
}