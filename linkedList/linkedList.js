/* 
linked list exercise
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
  }

  pop() {
    let popped = this.tail || undefined;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return popped
    }
    let search = this.head
    let found = false;
    while (!found) {
      if (search.next === this.tail) {
        search.next = null;
        this.tail = search;
        found = true;
        this.length--
      } else {
        search = search.next
      }
    }
    return popped;
  }

  get(val) {
    let node = this.head;
    while (val && node) {
      node = node.next;
      val--
    }
    return node;
  }
}

module.exports = SinglyLinkedList;