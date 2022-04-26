/* Array.prototype.some()
- 배열 내 단 하나라도 콜백 함수의 조건을 만족하는 요소가 있다면 true, 아니면 false 반환 (빈 배열인 경우 false)
- Array.some(function(item, index, array){}), item: 배열 요소, index: 배열 위치, array: 배열
*/

let users = [
	{ name: "bob", age: 17, job: false },
	{ name: "alice", age: 20, job: false },
	{ name: "john", age: 27, job: true },
];

let some_job = users.some(function (user) {
	return user.job == false;
});
console.log(some_job);

let some_age = users.some(function (user) {
	return user.age < 16;
});
console.log(some_age);

let empty = [].some((item) => item > 2);
console.log(empty);
