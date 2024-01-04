// const person: {
//     name: string,
//     age: number
// } = {
var person = {
    name: 'Gabriel',
    age: 30,
    hobbies: ['Photography', 'Sports'],
    role: [2, 'author']
};
person.role.push('admin');
// person.role[1] = 10;
var favoritePhotos;
favoritePhotos = ['Sky'];
console.log(person);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // console.log(hobby.map());
}
