/* 벽돌 옮기기 */

/* user code */
function answer(blocks) {
	let result = 0;
	let average = 0;
	let nums = 0;

	// 1. 모든 벽돌을 합쳐서 n빵 => 평균 높이 계산
	for (let i = 0; i < blocks.length; i++) {
		average += blocks[i];
	}
	average = average / blocks.length;
	// 2. 평균높이보다 크다면 그만큼 뺴고, 적다면 그만큼 채우기
	for (let i = 0; i < blocks.length; i++) {
		if (average > blocks[i]) {
			nums = average - blocks[i];
			result += nums;
		}
	}

	return result;
}

/* main code */
let input = [
	// TC: 1
	[5, 2, 4, 1, 7, 5],

	// TC: 2
	[12, 8, 10, 11, 9, 5, 8],

	// TC: 3
	[27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
