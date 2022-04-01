// call by value
// - 값에 의한 복사로 함수 내에서 매개 변수 값을 변경시켜도 영향이 미치지 않음
// - 원시 타입을 매개 변수로 넘겼을 때 발생

let a1 = 1;
let add = function (b1) {
	b1 = b1 + 1;
}; // callee
add(a1); // caller
console.log(a1); // output: 1

// call by reterence
// - 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
// - 객체 타입을 매개 변수로 넘겼을 때 발생

var a2 = { v: 1 };
var add2 = function (b2) {
	b2.v = b2.v + 1;
}; // callee
add2(a2); // caller
console.log(a2.v); // output: 2

// practice
// 문제1. 두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오.

function MAX(x, y) {
	// if (x > y) return x;
	// if (y > x) return y;
	if (x > y) {
		return x;
	} else {
		return y;
	}
	// return x > y ? x : y;
}

console.log(MAX(0, 3)); // output: 3
console.log(MAX(-1, 5)); // output: 5
console.log(MAX(100, 7)); // output: 100
