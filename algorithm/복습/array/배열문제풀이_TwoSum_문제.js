/* two sum */

/* user code */
function answer(nums, target) {
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				result.push(i, j);
			}
		}
	}
	return result;
}

/* main code */
let input = [
	// TC: 1
	[[2, 7, 11, 15], 9],

	// TC: 2
	[[3, 2, 4], 6],

	// TC: 3
	[[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1]));
}
