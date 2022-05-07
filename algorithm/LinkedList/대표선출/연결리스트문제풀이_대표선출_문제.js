/* user code */
function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;
}

function answer(n, m, k) {
	let result = [];

	// 1. 원형 연결 리스트 제작
	let ll = new LinkedList();
	let current, prev;
	for (let i = 1; i <= n; i++) {
		current = new Node(i);

		if (i == 1) {
			ll.head = current;
		} else {
			prev.next = current;
		}
		prev = current;
	}
	current.next = ll.head;

	// 2. start node 설정
	current = ll.head;
	while (--m) {
		prev = current;
		current = current.next;
	}

	// 3. 원형 돌면서 node삭제, node가 하나 남을 때 까지
	let count;
	while (current.next !== current) {
		result.push(current.data);
		prev.next = current.next;

		count = k;
		while (count--) {
			prev = current;
			current = current.next;
		}
	}
	// 4. 하나 남은 node도 push
	result.push(current.data);
	return result;
}

/* main code */
let input = [
	// TC: 1
	[8, 2, 3],

	// TC: 2
	[10, 2, 3],

	// TC: 3
	[20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1], input[i][2]));
}
