function answer(arr, num) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === num) {
				result = [i, j];
			}
		}
	}
	return result;
}

answer([2, 7, 11, 15], 9);
answer([3, 2, 4], 6);
answer([3, 3], 6);
