/* 조합 (combination)
    - 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 없이 나열하는 경우의 수 (nCr)
    - 4개의 숫자 카드에서 2개를 뽑는 경우의 수
*/

let input = [1, 2, 3, 4];
let output = [];
let count = 0;

function combination(arr, data, s, idx, r) {
	if (s == r) {
		count++;
		console.log(data);
		return;
	}

	for (let i = idx; arr.length - i >= r - s; i++) {
		data[s] = arr[i];
		combination(arr, data, s + 1, i + 1, r);
	}
}

combination(input, output, 0, 0, 2);
console.log(count);
