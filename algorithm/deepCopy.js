// 깊은복사

let user = {
	name: "park",
	age: 20,
	sizes: { height: 180, weight: 72 },
};

// JSON 객체를 이용한 깊은 복사
// stringify는 객체를 문자열로 변환하는데 이때 원본 객체와의 참조가 끊김

let admin_json = JSON.parse(JSON.stringify(user));

admin_json.sizes.weight++;
admin_json.sizes.height--;

console.log(admin_json.sizes.weight);
console.log(admin_json.sizes.height);

// for loop
function copyObj(obj) {
	let result = {};
	for (let key in obj) {
		if (typeof obj[key] === "object") result[key] = copyObj(obj[key]);
		else result[key] = obj[key];
	}
	return result;
}

let admin = copyObj(user);

admin.sizes.weight++;
admin.sizes.height--;

console.log("admin");
console.log(admin.sizes.weight);
console.log(admin.sizes.height);

console.log("user");
console.log(user.sizes.weight);
console.log(user.sizes.height);
