// 얕은복사
let user = {
	name: "park",
	age: 20,
	sizes: { height: 180, weigth: 60 },
};

let admin = { ...user }; // 얕은 복사이기에, sizes는 복사 불가

// using Object
// let admin = Object.assign({}, user);

// for loop
// let admin = {};

// for (let key in user) {
// 	admin[key] = user[key];
// }

admin.sizes.height++;
console.log(admin.sizes.height);
console.log(user.sizes.height);

admin.name = "kim";
console.log(admin.name);
console.log(user.name);

user.age = 40;
console.log(admin.age);
console.log(user.age);
