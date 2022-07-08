function answer(arr) {
	let result = 0;
	let aver = 0;

	for (let i = 0; i < arr.length; i++) {
		aver += arr[i];
	}
	aver = aver / arr.length;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > aver) {
			result += arr[i] - aver;
		}
	}
	return result;
}

answer([5, 2, 4, 1, 7, 5]);
answer([12, 8, 10, 11, 9, 5, 8]);
answer([27, 14, 19, 11, 26, 25, 23, 15]);
