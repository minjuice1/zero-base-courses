//객체 생성

// 싱글 리터럴 객체
const object = {
	property: "value",
	method: function () {},
};

// 생성자 함수 : 싱글 리터럴 객체를 빠르고, 많이 만들어야 할 때
function NewObject(name) {
	this.name = name;
}

// 생성자 함수는 new와 함께 쓰여야만 객체를 생성할 수 있음.
const newObject = new NewObject("kim");
console.log(newObject); // NewObject { name: 'kim' }

// Object.create(프로토타입, 객체 서술자(기술자))
const newObject2 = Object.create(Object.prototype, {
	name: {
		value: "park",
		writable: true, // 덮어쓸 수 있는지
		enumerable: false, // 열거할 수 있는지
		configurable: true, // 객체 서술자를 수정할 수 있는지
	},
});

console.log(newObject2); // { name: 'park' }

newObject2.name = "kim";
console.log(newObject2); // { name: 'kim' }
