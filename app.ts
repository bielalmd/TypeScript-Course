// const person: {
//     name: string,
//     age: number
// } = {

const person = {
    name: 'Gabriel',
    age: 30,
    hobbies: ['Photography', 'Sports']
};

let favoritePhotos: string[]
favoritePhotos = ['Sky']

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.map());
}