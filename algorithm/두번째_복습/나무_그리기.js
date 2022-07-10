function answer(num) {
	let result = "\n";

	for (let i = 0; i < num; i++) {
		for (let j = 0; j < num - i - 1; j++) {
			result += " ";
		}

		for (let k = 0; k < i * 2 + 1; k++) {
			result += "*";
		}
		result += "\n";
	}
	return result;
}

answer(3);
answer(5);
answer(7);
