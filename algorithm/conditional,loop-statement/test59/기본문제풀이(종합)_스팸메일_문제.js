/* 7. 스팸 메일 */

/* user code */
function answer(str) {
	let spam_flag;

	console.log(str.toUpperCase().includes("ADVERT"));

	return spam_flag;
}

/* main code */
let input = [
	// TC: 1
	"RE: Request documents",
	// TC: 2
	"[Advertisement] free mobile!",
	// TC: 3
	"50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}
