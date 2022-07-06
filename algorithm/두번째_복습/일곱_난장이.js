function sevenDwarf(arr) {
	let result = [];

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	sum -= 100;

	let noneDwarf = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (sum == arr[i] + arr[j]) {
				noneDwarf[0] = i;
				noneDwarf[1] = j;
				break;
			}
		}
		if (noneDwarf.length != 0) break;
	}

	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		if (noneDwarf[0] != i && noneDwarf[1] != i) {
			result[count++] = arr[i];
		}
	}

	return result;
}

sevenDwarf([1, 5, 6, 7, 10, 12, 19, 29, 33]);
sevenDwarf([25, 33, 11, 2, 18, 3, 28, 6, 37]);
sevenDwarf([3, 37, 5, 36, 22, 19, 2, 28]);
