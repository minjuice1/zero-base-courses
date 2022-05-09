/* 접시 꺼내기 */

/* user code */
function answer(str) {
	let result = [];
	let compare = str.split("").sort().join("");
	let stack = [];
	let compare_index = 0;

	for (let i = 0; i < str.length; i++) {
		while (stack.length == 0 || stack[stack.length - 1] < str[i]) {
			stack.push(compare[compare_index++]);
			result.push(0);
		}

		if (stack.length == 0 || stack[stack.length - 1] > str[i]) {
			return [];
		} else {
			stack.pop();
			result.push(1);
		}
	}

	return result;
}

/* main code */
let input = [
	// TC: 1
	"bacd",

	// TC: 2
	"dabc",

	// TC: 3
	"edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}
