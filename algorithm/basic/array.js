// 여러 개체(Entity)값을 순차적으로 나열한 자료 구조
// 배열 내 값을 요소(element)라고 하며, 배열 요소는 index로 접근
// 대표 속성(property)과 메서드(method)
// 배열 크기 및 배열 여부 확인: Array.length, Array.isArray()
// 배열 추가/삭제 (Last In Frist Out - Back) : Array.push(), Array.pop()
// 배열 추가/삭제 (LIFO - Front) : Array.shift(), Array.unshift()
// 배열 조작 : Array.splice(), Array.slice(), Array.concat()
// 배열 탐색 : Array.indexOf(), Array.lastIndexOf(), Array.includes()
// 배열 변형 (callback 미사용) : Array.sort(), Array.reverse(), Array.join()

let fruits = ["apple", "orange", "melon"];
let ret;

ret = fruits.splice(1);
console.log(ret); // output: [ 'orange', 'melon' ]
console.log(fruits); // output: [ 'apple' ]

fruits = ["apple", "orange", "melon", "banana"];

// 기존 배열의 데이터를 삭제
ret = fruits.splice(1, 1);
console.log(ret); // output: [ 'orange' ]
console.log(fruits); // output: [ 'apple', 'melon', 'banana' ]

// 기존 배열의 데이터를 삭제하고, 새로운 값을 추가
ret = fruits.splice(1, 1, "mango", "kiwi");
console.log(ret); // output: [ 'melon' ]
console.log(fruits); // output: [ 'apple', 'mango', 'kiwi', 'banana' ]

// 배열 요소 삭제 : Array.slice([start], [end])

// 다중 배열 병합 : Array.concat(arg1, arg2...)
fruits = ["apple", "orange", "melon"];

console.log(fruits.concat("strawberry"));
// output: [ 'apple', 'orange', 'melon', 'strawberry' ]
console.log(fruits.concat(["cherry", "banana"]));
// output: [ 'apple', 'orange', 'melon', 'cherry', 'banana' ]
console.log(fruits.concat(["cherry", "banana"], "mango"));
// output: [ 'apple', 'orange', 'melon', 'cherry', 'banana', 'mango' ]

// 배열 반복문
fruits = ["apple", "orange", "melon"];

// 1. use for (index)
// output: apple, orange, melon
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// 2. use for ...(element) of
// output: apple, orange, melon
for (let fruit of fruits) {
	console.log(fruit);
}

// 3. use for ...(key) in
// output: apple, orange, melon
for (let key in fruits) {
	console.log(fruits[key]);
}
