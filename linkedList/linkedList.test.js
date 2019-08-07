const SinglyLinkedList = require('./linkedList.js');

let linkedList = new SinglyLinkedList()

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

test('pops old node out of list', () => {
  expect(linkedList.pop().val).toBe(15);
  expect(linkedList.tail.val).toBe(10);
  expect(linkedList.length).toBe(2);
  expect(linkedList.pop().val).toBe(10);
  expect(linkedList.tail.val).toBe(5);
  expect(linkedList.length).toBe(1);
  expect(linkedList.pop().val).toBe(5);
  expect(linkedList.tail).toBe(null);
  expect(linkedList.length).toBe(0);
  expect(linkedList.pop()).toBe(undefined);
  expect(linkedList.length).toBe(0);
})

test('should get node by index', () => {
  linkedList = new SinglyLinkedList()
  linkedList.push(5);
  linkedList.push(10);
  linkedList.push(15);
  linkedList.push(20);
  expect(linkedList.get(0).val).toBe(5);
  expect(linkedList.get(1).val).toBe(10);
  expect(linkedList.get(2).val).toBe(15);
  expect(linkedList.get(3).val).toBe(20);
  expect(linkedList.get(4)).toBe(null);
})