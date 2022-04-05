// 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
// 매개변수로 전달되는 함수는 콜백 함수 (Callback function)
// 대표 배열 조작 메서드
// 임의 정렬 : Array.sort(callback function)
// 반복 작업 : Array.forEach()
// 콜백함수 결과 배열 반환 : Array.map()
// 조건 만족하는 하나의 값 반환 : Array.find()
// 조건 만족하는 값 배열로 반환 : Array.filter()
// 누적 결과 값 반환 : Array.reduce()

// sort(), reverse() 문제와 한계점
// 문제점 : 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
// 원인 : sort 메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생
let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];

console.log(nums.sort());
// output: [-1, 0, 1, 10, 12, 2, 20, 3, 4]
console.log(nums.reverse());
// output: [4, 3, 20, 2, 12, 10, 1, 0, -1]

// 한계점 : 대소문자 구분 없이 정렬하고 싶지만, 대소문자 구분되어 정렬
let fruits = ["apple", "Orange", "orange", "melon", "banana"];

console.log(fruits.sort());
// output: [ 'Orange', 'apple', 'banana', 'melon', 'orange' ]
console.log(fruits.reverse());
// output: [ 'orange', 'melon', 'banana', 'apple', 'Orange' ]

// sort() 고차함수
console.log("---------sort 고차함수---------");
let ascending_order = function (x, y) {
	return x - y; // > 0 이라면, 큰값이 뒤로 감.
	// ex) 4 - 1 = 3 이므로 0보다크니깐 4가 1보다 큰 것으로 확인 되므로
	// 4가 1의 뒤로감 => [1, 3]
};
let descending_order = function (x, y) {
	return y - x;
};

let nums2 = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums2.sort(ascending_order));
console.log(nums2.sort(descending_order));

let ascending_order2 = function (x, y) {
	x = x.toUpperCase();
	y = y.toUpperCase();

	// 모두 대문자로 변경해서
	if (x > y) return 1; // true 라면, 큰값이 뒤로 감.
	else if (y > x) return -1; // false 라면 두 요소의 자리가 바뀜.
	else return 0;
};
let descending_order2 = function (x, y) {
	x = x.toUpperCase();
	y = y.toUpperCase();

	if (x < y) return 1;
	else if (y < x) return -1;
	else return 0;
};

fruits = ["apple", "Orange", "orange", "melon", "banana"];

console.log(fruits.sort(ascending_order2));
console.log(fruits.sort(descending_order2));

console.log(
	"--sort 고차함수의 콜백 함수 ascending_order, descending_order 공용화--",
);
let ascending_order3 = function (x, y) {
	if (typeof x === "string") x = x.toUpperCase();
	if (typeof y === "string") y = y.toUpperCase();

	return x > y ? 1 : -1;
};

let descending_order3 = function (x, y) {
	if (typeof x === "string") x = x.toUpperCase();
	if (typeof y === "string") y = y.toUpperCase();

	return x < y ? 1 : -1;
};

nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];
console.log(nums.sort(ascending_order3));
console.log(nums.sort(descending_order3));

fruits = ["apple", "Orange", "orange", "melon", "banana"];
console.log(fruits.sort(ascending_order3));
console.log(fruits.sort(descending_order3));
