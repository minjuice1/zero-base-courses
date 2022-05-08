/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
	let result = [];
	let nums = 0;

	// 1. 배열안에 각 자릿수 별 index 생성.
	for (let i = 0; i < 10; i++) {
		result[i] = 0;
	}

	for (let i = s; i <= e; i++) {
		nums = i;

		// 자릿수 계산
		while (nums != 0) {
			result[nums % 10]++;
			nums /= 10;
			nums = parseInt(nums);
		}
	}

	return result;
}

/* main code */
let input = [
	// TC: 1
	[129, 137],

	// TC: 2
	[1412, 1918],

	// TC: 3
	[4159, 9182],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1]));
}
