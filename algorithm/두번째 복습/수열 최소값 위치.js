function arrayLowNum(arr) {
	let min = Number.MAX_SAFE_INTEGER;
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === min) {
			result.push(i);
		}
	}
	return result;
}

arrayLowNum([5, 2, 10, 2]);
arrayLowNum([4, 5, 7, 4, 8]);
arrayLowNum([12, 11, 11, 16, 11, 12]);
