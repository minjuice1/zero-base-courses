// 프로퍼티 열거

const obj = {
	prop1: "value1",
	prop2: "value2",
	prop3: "value3",
	prop4: "value4",
};

// for (const key in object) {}
for (const key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(obj[key]);
	}
}

console.log("obj.prop1", obj.prop1);
console.log("obj['prop1']", obj["prop1"]);
const prop2 = "prop2";
console.log("obj[prop2]", obj[prop2]);
const prop = "prop";
console.log("obj[prop + 1]", obj[prop + 1]);
