/* 2. 잃어버린 카드 찾기 */

/* user code */
function answer(a, b, c) {
	let number = 0;

	// sort
	num = [a, b, c];
	num.sort((x, y) => x - y);

	let first = num[1] - num[0];
	let second = num[2] - num[1];
	let resultCompare;
	if (first > second) {
		resultCompare = first / 2;
		number = num[0] + resultCompare;
	}
	if (second > first) {
		resultCompare = second / 2;
		number = num[1] + resultCompare;
	}

	return number;
}

/* main code */
let input = [
	// TC: 1
	[1, 7, 10],

	// TC: 2
	[3, 8, 18],

	// TC: 3
	[2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
