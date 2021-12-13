const SinglyLinkedList = require('./linkedList.js');

let linkedList = new SinglyLinkedList()

test('creates a new singly linked list', () => {
  expect(linkedList.length).toBe(0);
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});

test('adds a new node', () => {
  linkedList.push(5)
  expect(linkedList.length).toBe(1);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.tail.val).toBe(5);

  linkedList.push(10)
  expect(linkedList.length).toBe(2);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.head.next.val).toBe(10);
  expect(linkedList.tail.val).toBe(10);

  linkedList.push(15)
  expect(linkedList.length).toBe(3);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.head.next.val).toBe(10);
  expect(linkedList.head.next.next.val).toBe(15);
  expect(linkedList.tail.val).toBe(15);
});

test('pops old node out of list', () => {
  expect(linkedList.pop().val).toBe(15);
  expect(linkedList.tail.val).toBe(10);
  expect(linkedList.length).toBe(2);
  expect(linkedList.pop().val).toBe(10);
  expect(linkedList.tail.val).toBe(5);
  expect(linkedList.length).toBe(1);
  expect(linkedList.pop().val).toBe(5);
  expect(linkedList.tail).toBeNull();
  expect(linkedList.length).toBe(0);
  expect(linkedList.pop()).toBeUndefined();
  expect(linkedList.length).toBe(0);
})

test('should get node by index', () => {
  linkedList = new SinglyLinkedList()
  linkedList.push(5).push(10).push(15).push(20);
  expect(linkedList.get(0).val).toBe(5);
  expect(linkedList.get(1).val).toBe(10);
  expect(linkedList.get(2).val).toBe(15);
  expect(linkedList.get(3).val).toBe(20);
  expect(linkedList.get(4)).toBeNull();
})

test('should insert node by index', () => {
  expect(linkedList.insert(2, 12)).toBe(true);
  expect(linkedList.insert(100, 12)).toBe(false);
  expect(linkedList.length).toBe(5);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.head.next.val).toBe(10);
  expect(linkedList.head.next.next.val).toBe(12);
  expect(linkedList.head.next.next.next.val).toBe(15);
  expect(linkedList.head.next.next.next.next.val).toBe(20);
  expect(linkedList.insert(5, 25)).toBe(true);
  expect(linkedList.head.next.next.next.next.next.val).toBe(25);
  expect(linkedList.tail.val).toBe(25);
})

test('should rotate by number given', () => {
  linkedList = new SinglyLinkedList()
  linkedList.push(5).push(10).push(15).push(20).push(25);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.tail.val).toBe(25);
  expect(linkedList.length).toBe(5);

  linkedList.rotate(3);
  expect(linkedList.head.val).toBe(20);
  expect(linkedList.head.next.val).toBe(25);
  expect(linkedList.head.next.next.val).toBe(5);
  expect(linkedList.head.next.next.next.val).toBe(10);
  expect(linkedList.head.next.next.next.next.val).toBe(15);
  expect(linkedList.tail.val).toBe(15);
  expect(linkedList.tail.next).toBeNull();

  linkedList = new SinglyLinkedList()
  linkedList.push(5).push(10).push(15).push(20).push(25);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.tail.val).toBe(25);
  expect(linkedList.length).toBe(5);

  linkedList.rotate(-1);
  expect(linkedList.head.val).toBe(25);
  expect(linkedList.head.next.val).toBe(5);
  expect(linkedList.head.next.next.val).toBe(10);
  expect(linkedList.head.next.next.next.val).toBe(15);
  expect(linkedList.head.next.next.next.next.val).toBe(20);
  expect(linkedList.tail.val).toBe(20);
  expect(linkedList.tail.next).toBeNull();

  linkedList = new SinglyLinkedList()
  linkedList.push(5).push(10).push(15).push(20).push(25);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.tail.val).toBe(25);
  expect(linkedList.length).toBe(5);

  linkedList.rotate(1000);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.head.next.val).toBe(10);
  expect(linkedList.head.next.next.val).toBe(15);
  expect(linkedList.head.next.next.next.val).toBe(20);
  expect(linkedList.head.next.next.next.next.val).toBe(25);
  expect(linkedList.tail.val).toBe(25);
  expect(linkedList.tail.next).toBeNull();
})

test('should reassign new value to node at given index', () => {
  linkedList = new SinglyLinkedList();
  expect(linkedList.set(0,10)).toBe(true);
  expect(linkedList.set(1,2)).toBe(true);
  expect(linkedList.length).toBe(2);
  expect(linkedList.head.val).toBe(10);
  expect(linkedList.set(10,10)).toBe(false);
  expect(linkedList.set(2,100)).toBe(true);
  expect(linkedList.head.next.next.val).toBe(100);
  expect(linkedList.tail.val).toBe(100);
})

test('should remove node at given index', () => {
  linkedList = new SinglyLinkedList();
  linkedList.push(5).push(10).push(15).push(20);
  expect(linkedList.remove(2).val).toBe(15);
  expect(linkedList.remove(100)).toBeUndefined();
  expect(linkedList.length).toBe(3);
  expect(linkedList.head.val).toBe(5);
  expect(linkedList.head.next.val).toBe(10);
  expect(linkedList.head.next.next.val).toBe(20);
})