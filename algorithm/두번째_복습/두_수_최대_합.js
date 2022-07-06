function maxTwoSum(arr) {
	let first = arr[0];
	let second = arr[1];

	for (let i = 2; i < arr.length; i++) {
		if (first < arr[i]) {
			if (first > second) {
				second = first;
			}
			first = arr[i];
		} else if (second < arr[i]) {
			second = arr[i];
		}
	}
	return [first, second];
}

maxTwoSum([-11, 5, 18, -2, -3, 6, 4, 17, 10, 9]);
maxTwoSum([3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, 5, 14, -9, 19]);
maxTwoSum([
	-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
	14,
]);
