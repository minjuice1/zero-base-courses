/* 점화식 (=재귀식)
    - 점화식(재귀식)이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
    - 대표적인 점화식
      1. 등차 수열 : F(n) = F(n - 1) + a
      2. 등비 수열 : F(n) = F(n - 1) * a
      3. 팩토리얼  : F(n) = F(n - 1) * n
      4. 피보나치 수열 : F(n) = F(n - 1) + F(n - 2)
 */

// 등차수열 (for문 ver.)
let result;

function forloop(s, t, number) {
	let acc = 0;

	for (let i = 1; i <= number; i++) {
		if (i == 1) {
			acc += s;
		} else {
			acc += t;
		}
	}
	return acc;
}

result = forloop(3, 2, 5);
console.log("forloop", result);

// 등차수열 (재귀 ver.)

let output;

function recursive(s, t, number) {
	// 멈출 조건
	if (number == 1) {
		return s;
	}

	// 반복할 코드
	return recursive(s, t, number - 1) + t;
}

output = recursive(3, 2, 5);
console.log("recursive", output);

// 팩토리얼 (재귀 ver.)

let factorial_result;

function factorial(number) {
	// 멈출 조건
	if (number == 1) {
		return 1;
	}

	// 반복할 코드
	return factorial(number - 1) * number;
}

factorial_result = factorial(5);
console.log("factorial", factorial_result);

// 피보나치 수열
let fibonacci_result;

function fibonacci(number) {
	if (number == 1 || number == 0) {
		return number;
	}

	return fibonacci(number - 1) + fibonacci(number - 2);
}

fibonacci_result = fibonacci(5);
console.log("fibonacci", fibonacci_result);
