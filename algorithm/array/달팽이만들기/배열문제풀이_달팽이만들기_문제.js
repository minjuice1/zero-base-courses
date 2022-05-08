/* 달팽이 만들기 */

/* user code */
function answer(length) {
	let result = [];

	// 2차원 배열 생성
	for (let i = 0; i < length; i++) {
		result[i] = [];
	}

	// 반복문 돌기
	let direction = 1;
	let x, y, num;
	x = y = num = 0;
	x--;
	while (1) {
		for (let i = 0; i < length; i++) {
			x += direction;
			result[y][x] = ++num;
		}

		length--;

		if (length <= 0) break;

		for (let j = 0; j < length; j++) {
			y += direction;
			result[y][x] = ++num;
		}

		direction *= -1;
	}

	return result;
}

/* main code */
let input = [
	// TC: 1
	3,

	// TC: 2
	5,

	// TC: 3
	6,
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}
