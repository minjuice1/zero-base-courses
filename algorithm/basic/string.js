// 문자열 길이: String.length
// 문자열 접근: String.charAt(index), String.chorCodeAt(index)
// 문자열 검색: String.indexOf(), String.lastIndexOf(), STring.includes(), String.startsWith()
// 문자열 변환: String.toUpperCase(), String.toLowerCase()
// 문자열 치환: String.replace()
// 문자열 추출: String.slice(), String.substring(), String.substr()
// 문자열 분할: String.split()

// 문자 표기
console.log("line\nfeed"); // output: line <newline> feed
console.log("carriage\rreturn"); // output: carriage <newline> return
console.log("backslash \\"); // output: backslash \
console.log("tab\ttab"); // output: tab  tab
console.log("smile \u{1F60D}"); // output: smile: 😍

// 문자열 길이
let str1 = `hello
world
hihihi`;
console.log(str1.length); // output: 18

// 문자열 내 개별 문자 접근 방법
let str2 = "hello, world~!~!";
console.log(str2.charAt(1)); // output: e
console.log(str2.charCodeAt(1)); // 아스키코드 // output: 101
console.log(str2[0]); // output: h

// 문자열 검색(index)
let str3 = "hello, world";
console.log(str3.indexOf("l")); // output: 2
console.log(str3.indexOf("l", 5)); //5는 시작점 // output: 10
console.log(str3.lastIndexOf("l")); // output: 10

// 문자열 검색(bool)
console.log(str3.includes("hello")); // output: true
console.log(str3.startsWith("llo")); // output: false
console.log(str3.startsWith("llo", 2)); // llo로 시작하는지 output: true
console.log(str3.endsWith("world")); // output: true

// 문자열 대소문자 변환
let str4 = "HELlo";
console.log(str4.toUpperCase()); // output: HELLO
console.log(str4.toLocaleLowerCase()); // output: hello

// 처음 만나는 요소 문자열 치환
let text = "hello, world!!";
let changed_text = "";

changed_text = text.replace("world", "friend");

console.log(changed_text); //outtput: hello, friend!!
console.log(text); //output: hello, world!!

console.log(text.replace("!", "?")); //output: hello, world?!
console.log(text.replace("l", "x")); //output: hexlo, world!!

// (모든 요소) 정규 표현식 활용 문자열 치환 : 치환 문자열에 정규 표현식 기입 -> /치환문자열/g(전체)i(대소문자 구분x)
let text2 = "helLo, world!!";
console.log(text2.replace(/l/g, "z")); //output: hezLo, worzd!!
console.log(text2.replace(/l/gi, "z")); //output: hezzo, worzd!!

// 위치 기반 문자열 추출
let text3 = "hello, world~~";
console.log(text3.slice(0, 5)); //output: hello
console.log(text3.slice(3, 5)); //output: lo
console.log(text3.slice(3)); //output: lo, world~~
console.log(text3.slice(-3)); // output: d~~
console.log("==================");
// substring: end > start -> start > end
console.log(text3.slice(2, 4)); //output: ll
console.log(text3.slice(4, 2)); //output:
console.log(text3.substring(2, 4)); //output: ll
console.log(text3.substring(4, 2)); //output: ll

console.log(text3.substr(2, 4)); //2부터 4개 //output: llo,
console.log(text3.substr(-5, 3)); //output: rld

console.log("==================");
// 배열로 문자열 분할
let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result); //output: [ 'apple', 'banana', 'melon' ]

console.log(result[0]); //output: apple
console.log(result[1]); //output: banana
console.log(result[2]); //output: melon

let text4 = "hello";

result2 = text4.split("");
console.log(result2); //output: [ 'h', 'e', 'l', 'l', 'o' ]
console.log(result2.length); //output: 5
console.log(result2[0]); //output: h

result2 = text4.split("", 3);
console.log(result2); // [ 'h', 'e', 'l' ]
console.log(result2.length); // 3
