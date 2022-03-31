// 문제1. 반복문 for를 이용하여 0부터 10까지의 정수 중 짝수의 합을 구한 뒤 출력해주는 코드를 작성하라

const UNTIL_NUM = 10;
let sum = 0;

for (let i = UNTIL_NUM; i >= 0; i--) {
	if (i % 2 == 0) {
		// console.log(i);
		sum = sum + i;
	}
}

// 0 ~ 10 : 10 8 6 4 2 -> 30
console.log("문제1 ", sum); // output: 30

// 문제2. 반복문 for 2개를 이용하여 2~9단까지 출력해주는 코드를 작성하시오

for (let i = 2; i <= 9; i++) {
	// console.log("i", i);
	for (let j = 1; j <= 9; j++) {
		// console.log("j", j);
		console.log(`문제2 ${i} x ${j} = ${i * j}`);
	}
}
