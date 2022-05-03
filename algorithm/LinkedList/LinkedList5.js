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

// insert() : position 위치에 노드 추가 (앞쪽으로)
LinkedList.prototype.insert = function (value, position = 0) {
	if (position < 0 || position > this.length) {
		return false;
	}

	let node = new Node(value),
		current = this.head,
		index = 0,
		prev;

	if (position == 0) {
		node.next = current;
		this.head = node;
	} else {
		while (index++ < position) {
			prev = current;
			current = current.next;
		}

		node.next = current;
		prev.next = node;
	}

	this.length++;

	return true;
};

// remove() : value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
	let current = this.head,
		prev = current;

	while (current.data != value && current.next != null) {
		prev = current;
		current = current.next;
	}

	if (current.data != value) {
		return null;
	}

	if (current === this.head) {
		this.head = current.next;
	} else {
		prev.next = current.next;
	}
	this.length--;

	return current.data;
};

// removeAt() : position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
	if (position < 0 || position >= this.length) {
		return null;
	}

	let current = this.head,
		index = 0,
		prev;

	if (position == 0) {
		this.head = current.next;
	} else {
		while (index++ < position) {
			prev = current;
			current = current.next;
		}

		prev.next = current.next;
	}

	this.length--;

	return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.printNode(); // 1 -> null
ll.insert(10);
ll.printNode(); // 10 -> 1 -> null

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode(); // 10 -> 2 -> 1 -> 3 -> null

console.log(ll.removeAt(1000)); // null
ll.printNode(); // 10 -> 2 -> 1 -> 3 -> null
console.log(ll.removeAt(1)); // 2
ll.printNode(); // 10 -> 1 -> 3 -> null
console.log(ll.removeAt(0)); // 10
ll.printNode(); // 1 -> 3 -> null

console.log(ll.size()); // 2
