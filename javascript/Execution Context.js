/*
 * # 생성 단계
 *
 * 1. 전역 객체 생성
 * 2. 변수 생성
 * 3. 변수는 undefined로 초기화
 * 4. hello 함수는 메모리에 위치
 */

var name = "zero";

function hello() {
	console.log(this.name);
	console.log(name);
}

/*
 * # 실행 단계
 *
 * 1. 함수 호출시 함수 실행 컨텍스트 생성
 * 2. arguments 접근 가능
 * 3. GEC에서 생성된 환경에 접근 가능
 * 4. 만약 함수가 다른 함수 호출시 새로운 함수의 실행 컨텍스트 생성되며 반복
 */

var name = "zero";
function second() {
	console.log("두번째"); // 두번째
}

function first() {
	second();
	console.log(this.name); // undefined
	console.log(name); // zero
}

first();
