// Node() : data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
	this.data = data;
	this.next = null;
	this.prev = null;
}

// LinkedList() : head, tail과 length를 가지고 있는 객체
function DoubleLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function () {
	return this.lenghth;
};

// isEmpty() : 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function () {
	return this.length === 0;
};

let dll = new DoubleLinkedList();
let node;
console.log(dll); // DoubleLinkedList { head: null, tail: null, length: 0 }

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList {
  head: Node { data: 123, next: null, prev: null },
  tail: Node { data: 123, next: null, prev: null },
  length: 1
} */

node = new Node(456);
dll.head.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);
/*
DoubleLinkedList {
  head: <ref *1> Node {
    data: 123,
    next: Node { data: 456, next: null, prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    data: 456,
    next: null,
    prev: <ref *1> Node { data: 123, next: [Circular *2], prev: null }
  },
  length: 2
} */
