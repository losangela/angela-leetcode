const SinglyLinkedList = require('./linkedList.js');

const linkedList = new SinglyLinkedList()

test('creates a new singly linked list', () => {
  expect(linkedList.length).toBe(0);
  expect(linkedList.head).toBe(null);
  expect(linkedList.tail).toBe(null);
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