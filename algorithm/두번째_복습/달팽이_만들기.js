function answer(length) {
	let result = [];

	for (let i = 0; i < length; i++) {
		result[i] = [];
	}

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

answer(4);
