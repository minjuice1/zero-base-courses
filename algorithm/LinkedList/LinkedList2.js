function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;
	this.length = 0;
}

LinkedList.prototype.size = function () {
	return this.length;
};

LinkedList.prototype.isEmpty = function () {
	return this.length === 0;
};

// printNode() : 노드 출력
LinkedList.prototype.printNode = function () {
	for (let node = this.head; node != null; node = node.next) {
		process.stdout.write(`${node.data} -> `);
	}
	console.log("null");
};

// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
	let node = new Node(value),
		current = this.head;

	if (this.head === null) {
		this.head = node;
	} else {
		while (current.next != null) {
			current = current.next;
		}
		current.next = node;
	}
	this.length++;
};

let ll = new LinkedList();

ll.append(1);
ll.printNode();
ll.append(5);
ll.printNode();
ll.append(10);

ll.printNode();
console.log(ll.size());
