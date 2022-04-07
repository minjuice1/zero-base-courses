// use for loop
// output: 1 2 3
let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
	console.log("for loop", nums[i]);
}

// forEach()
<<<<<<< HEAD
// 배열 요소 별 콜백 함수 각각에 실행: Array.forEach(function(item, index, array){})
=======
// 배열 요소 별 콜백 함수 각각에 실행: Array..forEach(function(item, index, array){})
>>>>>>> f7efa411724510cb8c6af405eb64ae045aff34e4
// item: 배열 요소, index: 배열 위치, array: 배열
// output: 1 2 3
nums.forEach(function (i) {
	console.log("forEach", i);
});

// map()
// 배열 요소 별 함수 및 결과를 배열로 반환: Array.map(function(item,index,array){})
// item: 배열 요소, index: 배열 위치, array: 배열
// output: [ 2, 4, 6 ]
let use_map = nums.map(function (item) {
	return item * 2;
});
console.log("use_map", use_map);

// find()
// 콜백 함수의 조건을 만족하는, 단 하나의 값만 반환: Array.find(function(item,index,array){})
// item: 배열 요소, index: 배열 위치, array: 배열

let users = [
	{ name: "bob", age: 17, job: false },
	{ name: "amy", age: 20, job: false },
	{ name: "john", age: 27, job: true },
];

let find_job = users.find(function (user) {
	return user.job == false;
});
console.log("find_job", find_job);
//output: { name: 'bob', age: 17, job: false }

let find_age = users.find(function (user) {
	return user.age > 19;
});
console.log("find_age", find_age);
//output: { name: 'john', age: 27, job: true }

// filter()
// 콜백 함수의 조건을 만족하는 값을 배열로 반환: Array.filter(function(item,index,array){})
// item: 배열 요소, index: 배열 위치, array: 배열

let filter_job = users.filter(function (user) {
	return user.job == false;
});
console.log("filter_job", filter_job);
// output: [
//   { name: 'bob', age: 17, job: false },
//   { name: 'amy', age: 20, job: false }
// ]

let filter_age = users.filter(function (user) {
	return user.age > 19;
});
console.log("filter_age", filter_age);
// output: [
//   { name: 'amy', age: 20, job: false },
//   { name: 'john', age: 27, job: true }
// ]

// reduce()
// 요소 별 함수 수행 누적 결과값 반환: Array.reduce(function(accumulator,item,index,array){})
// accumulator:이전 함수 결과(initial로 초기값 설정 가능), item: 배열 요소, index: 배열 위치, array: 배열

let nums2 = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");
let sum = nums2.reduce(function (accumulator, item, index, array) {
	console.log(accumulator, "\t\t", item, "\t\t", index);
	call_count++;
	return accumulator + item;
}, 0);

console.log(call_count);
console.log(sum);
// output:
// result	value	index
// 0 		 1 		 0
// 1 		 2 		 1
// 3 		 3 		 2
// 6 		 4 		 3
// 10 		 5 		 4
// 5
// 15
