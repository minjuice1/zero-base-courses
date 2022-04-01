// 1. 함수 선언식
function add_1(x, y) {
	return x + y;
}

// 2. 함수 표현식
const add_2 = function (x, y) {
	return x + y;
};

// 3. 화살표 함수
const add_3 = (x, y) => x + y;

// 4. 함수 선언식 add_1을 add_4에 할당한다면?
const add_4 = add_1;

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));
