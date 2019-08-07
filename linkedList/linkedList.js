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

  // This function should take in a value and add a node to the end of the SinglyLinkedList.
  // It should return the SinglyLinkedList.
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
    return this
  }

  // This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.
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

  // This function should find a node at a specified index in a SinglyLinkedList. It should return the found node.
  get(val) {
    let node = this.head;
    while (val && node) {
      node = node.next;
      val--
    }
    return node;
  }

  // This should insert a node at a specified index in a SinglyLinkedList. It should return true
  // if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list)
  insert(i, val) {
    if (i > this.length || i < 0) {
      return false
    } else {
      let node = new Node(val)
      let pointer = this.head;
      let prev;
      if (i === this.length) {
        this.tail = node;
      }
      while (i) {
        prev = pointer
        pointer = pointer.next
        i--
      }
      prev.next = node;
      node.next = pointer;
      this.length++
      return true
    }
  }

  // .rotate should rotate all the nodes in the list by some number passed in.
  // For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5-> and you rotate by 2,
  // the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.
  rotate(num) {
    num = num % this.length;
    if (num < 0) {
      num = num + this.length;
    }
    let newHead = this.head
    let newTail;
    while (num) {
      newTail = newHead;
      newHead = newHead.next;
      num--
    }
    if (newTail) {
      this.tail.next = this.head;
      this.head = newHead;
      this.tail = newTail
      this.tail.next = null;
    }
  }

  // this function should accept an index and a value and update the value of the node in the SinglyLinkedList at the
  // index with the new value. It should return true if the node is updated successfully or false if an invalid index
  // is passed in.
  set(i, val) {
    if (i > this.length || i < 0) {
      return false
    } else {
      if (i === this.length) {
        let node = new Node(val);
        if (this.head) {
          this.tail.next = node;
        } else {
          this.head = node;
        }
        this.tail = node;
        this.length++
        return true
      }
      let oldNode = this.head;
      while (i) {
        oldNode = oldNode.next
        i--
      }
      oldNode.val = val
      return true
    }
  }

}

module.exports = SinglyLinkedList;