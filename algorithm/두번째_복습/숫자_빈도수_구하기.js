function answer(f, s) {
	let result = [];

	for (let i = 0; i < 10; i++) {
		result[i] = 0;
	}

	let num;
	for (let i = f; i <= s; i++) {
		num = i;
		while (num != 0) {
			result[num % 10]++;
			num /= 10;
			num = parseInt(num);
		}
	}
}

answer(129, 137);
// answer(1412, 1918);
// answer(4159, 9182);
