// const person: {
//     name: string,
//     age: number
// } = {

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Gabriel',
    age: 30,
    hobbies: ['Photography', 'Sports'],
    role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoritePhotos: string[]
favoritePhotos = ['Sky']

console.log(person);
console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map());
}