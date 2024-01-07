"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Gabriel',
    age: 30,
    hobbies: ['Photography', 'Sports'],
    role: Role.ADMIN
};
let favoritePhotos;
favoritePhotos = ['Sky'];
console.log(person);
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('Its author');
}
else {
    console.log('Its not author');
}
//# sourceMappingURL=objs-arrays-enums.js.map