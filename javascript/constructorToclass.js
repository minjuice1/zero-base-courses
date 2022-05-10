/*
클래스와 인스턴스
*/

// 인스턴스
function Person(name, age, location) {
	this.name = name;
	this.age = age;
	this.location = location;

	this.getName = function () {
		return this.name + "입니다";
	};
}

const me = new Person("park", 10, "Korea");
const you = new Person("kim", 30, "Japan");

console.log(me.getName()); // park입니다
console.log(you.getName()); // kim입니다

// 클래스

class Person2 {
	constructor(name, age, location) {
		this.name = name;
		this.age = age;
		this.location = location;
	}

	getName() {
		return this.name + "입니다";
	}
}

const me2 = new Person2("park", 10, "Korea");
const you2 = new Person2("kim", 30, "Japan");

console.log(me2.getName()); // park입니다
console.log(you2.getName()); // kim입니다
