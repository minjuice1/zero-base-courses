// Set
// value만을 저장하며 중복을 허용하지 않는 Collection
// Set은 key값이 없고, value만 갖고 있음.
// 대표 속성(Property) 및 메서드(method)
// 생성자: new Set()
// 개수 확인: Set.size
// 요소 추가: Set.add(value)
// 요소 삭제: Set.delete(value)
// 전체 삭제: Set.clear()
// 요소 존재 여부 확인: Set.has(value)
// 그 밖의 메서드: Set.keys(), Set.values(), Set.entries()

// 요소 추가/삭제
// 요소 추가: Set.add(value), 요소 존재 여부: Set.has(value), 요소 삭제: Set.delete(value)
// 다양한 자료형을 value로 사용 가능하며, set.add 호출 시 set이 반환되므로 체이닝(chaining) 가능

let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set);
//output: Set(0) {}
console.log(num);
//output: Set(5) { 1, 2, 3, 4, 5 }
console.log(str);
//output: Set(5) { 'H', 'e', 'l', 'o', '!' }

// 1. add
set.add(1).add(1).add(10).add(20);
console.log(set); //output: Set(3) { 1, 10, 20 }

// 2. has
console.log(set.has(10)); //output: true
console.log(set.has(2)); //output: false

// 3. delete
set.delete(10);
set.delete(-1);
console.log(set.delete(-5)); //output: false
console.log(set.delete(20)); //output: true
console.log(set); //output: Set(2) { 1 }

// Set 반복문
// Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행 가능

console.log(str);

for (let item of str) console.log(item);
//output: Set(5) { 'H', 'e', 'l', 'o', '!' }

for (let item of str.keys()) console.log(item);
//output: H e l o !

for (let item of str.values()) console.log(item);
//output: H e l o !

// Set은 key값이 없지만, Map과의 호환성을 위해 key도 value와 같은 값으로 출력된다.
for (let item of str.entries()) console.log(item);
//output:
// [ 'H', 'H' ]
// [ 'e', 'e' ]
// [ 'l', 'l' ]
// [ 'o', 'o' ]
// [ '!', '!' ]

console.log(str.keys()); //output: [Set Iterator] { 'H', 'e', 'l', 'o', '!' }
console.log(str.entries());
// output
// [Set Entries] {
//   [ 'H', 'H' ],
//   [ 'e', 'e' ],
//   [ 'l', 'l' ],
//   [ 'o', 'o' ],
//   [ '!', '!' ]
// }
