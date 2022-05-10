/* 기린의 시야 */

/* user code */
function answer(giraffe) {
	let result = 0;

	let stack = [];

	// 최대수를 생성해서 벽? 역할로 사용, 맨끝의 두번째 기린이 0이 되게
	giraffe.push(Number.MAX_SAFE_INTEGER);

	for (let i = 0; i < giraffe.length; i++) {
		// 스택의 길이가 0이 아니거나,
		// 스택 배열의 맨 윗값의 h가 해당 giraffe[i]보다 작을 경우에 계속 돈다.

		while (stack.length != 0 && stack[stack.length - 1]["h"] < giraffe[i]) {
			// 예시) [5, 2]가 들어있고 giraffe[i]가 4일 경우에 pop을 해야하니까
			// 2는 4보다 작으므로 pop -> 2 - 1 - 1 = 0
			// 예시) [5, 4, 2]가 들어있고 griaffe[i]가 6일 경우에 pop
			// 5, 4, 2는 6보다 작으므로
			// 2는 -> 4 - 3 - 1 = 0
			// 4는 -> 4 - 2 - 1 = 1
			// 5는 -> 4 - 0 - 1 = 3
			result += i - stack.pop()["i"] - 1;
		}

		// 반복문의 조건에 해당되지 않는다면,
		// 다음 기린이 현재의 기린보다 작은 것 이므로 push.
		stack.push({ h: giraffe[i], i: i });
	}

	return result;
}

/* main code */
let input = [
	// TC: 1
	[10, 3, 7, 4, 12, 2],

	// TC: 2
	[7, 4, 12, 1, 13, 11, 12, 6],

	// TC: 3
	[20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}
