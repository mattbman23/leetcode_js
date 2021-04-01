class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor(head) {
    this.head = head;
  }
}

LinkList.prototype.size = function () {
  let count = 0;
  let node = this.head;

  while (node) {
    count++;
    node = node.next;
  }

  return count;
};

LinkList.prototype.getLast = function () {
  let node = this.head;
  while (node) {
    if (node.next === null) {
      return node.data;
    }
    node = node.next;
  }
};

LinkList.prototype.getFirst = function () {
  return this.head.data;
};

LinkList.prototype.reverse = function () {
  let currentHead = this.head.next;
  let reverseList = this.head;
  reverseList.next = null;

  while (currentHead) {
    let temp = currentHead;
    currentHead = currentHead.next;

    temp.next = reverseList;
    reverseList = temp;
  }

  return reverseList;
};

let node1 = new Node(6);
let node2 = new Node(2);
let node3 = new Node(67);
node2.next = node3;
node1.next = node2;

let list = new LinkList(node1);

console.log(list);
console.log(list.reverse());
console.log(list.size());
console.log(list.getLast());
console.log(list.getFirst());
