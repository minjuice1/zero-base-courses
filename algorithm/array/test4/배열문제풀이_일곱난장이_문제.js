/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
	let result = [];

	// 1. 구해야 할 두 숫자의 합
	let sum = 0;
	for (let i = 0; i < dwarf.length; i++) {
		sum += dwarf[i];
	}
	sum -= 100;

	// 2. 두 숫자를 구하기
	let except = [];
	for (let i = 0; i < dwarf.length; i++) {
		for (let j = i + 1; j < dwarf.length; j++) {
			if (sum == dwarf[i] + dwarf[j]) {
				except[0] = i;
				except[1] = j;
				break;
			}
		}

		if (except.length != 0) break;
	}
	// 3. 두 숫자를 제외한 나머지 값들을 출력
	let count = 0;
	for (let i = 0; i < dwarf.length; i++) {
		if (except[0] != i && except[1] != i) {
			result[count] = dwarf[i];
			count++;
		}
	}

	return result;
}

/* main code */
let input = [
	// TC: 1
	[1, 5, 6, 7, 10, 12, 19, 29, 33],

	// TC: 2
	[25, 23, 11, 2, 18, 3, 28, 6, 37],

	// TC: 3
	[3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}
