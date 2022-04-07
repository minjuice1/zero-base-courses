// 생성자 함수
// 유사한 객체를 다중으로 만들 때 사용되는 함수 (타 언어에서의 class 개념과 유사)
// 일반적으로 생성자 함수의 첫 글자는 대문자로 시작
// 생성자 함수로 객체 생성 시 new 연산자를 통해 객체 생성

function FishBread(flavor, price) {
	this.flavor = flavor;
	this.price = price;
	this.base = "flour";
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);

// new.target
// new.target 속성(property)을 사용하여 new와 함께 호출했는지 확인 가능
function User(name) {
	console.log(new.target);
	this.name = name;
}

// not use new keyword -> function
let result_1 = User("john");
console.log(result_1);
// output
// undefined
// undefined

// use new keyword => constructor function
let result_2 = new User("john");
console.log(result_2);
// output
// [Function: User]
// User { name: 'john' }

// new와 함께 호출을 안했을 경우 new를 붙여주는 조건 처리.
console.log("=========user2==========");
function User2(name) {
	if (!new.target) {
		return new User2(name);
	}
	this.name = name;
}

let result_3 = User2("john");
console.log(result_3);
// output: User2 { name: 'john' }

let result_4 = new User2("john");
console.log(result_4);
// output: User2 { name: 'john' }
