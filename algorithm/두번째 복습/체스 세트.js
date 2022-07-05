function playChess(arr) {
	let compare = [1, 1, 2, 2, 2, 8];
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		if (compare[i] > arr[i]) {
			result.push(compare[i] - arr[i]);
		} else if (compare[i] < arr[i]) {
			let num = arr[i] - compare[i];
			if (num > 0) {
				num = -num;
			}
			result.push(num);
		} else {
			result.push(0);
		}
	}
	return result;
}

playChess([0, 1, 2, 2, 2, 7]);
playChess([2, 1, 2, 1, 2, 1]);
playChess([0, 1, 1, 5, 3, 6]);
