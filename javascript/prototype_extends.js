/*
프로토타입 확장 (extends, 상속)
*/

// Super Class
class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	getInfo() {
		return this.name + "가(이)" + this.sound + " 소리를 낸다.";
	}
}

// Sub Class
class Friends extends Animal {
	constructor(name, sound) {
		super(name, sound);
	}
}

const dog = new Friends("개", "멍멍");
const cat = new Friends("고양이", "야옹");
console.log(dog); // Friends { name: '개', sound: '멍멍' }
console.log(cat); // Friends { name: '고양이', sound: '야옹' }

console.log(dog.getInfo()); // 개가(이)멍멍 소리를 낸다.
console.log(cat.getInfo()); // 고양이가(이)야옹 소리를 낸다.

console.log(dog.constructor.name); // Friends
console.log(cat.constructor.name); // Friends

console.log(dog instanceof Friends); // true
console.log(dog instanceof Animal); // true
