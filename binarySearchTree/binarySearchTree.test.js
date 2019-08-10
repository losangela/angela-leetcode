const BinarySearchTree = require('./binarySearchTree.js');

let bst = new BinarySearchTree ()

test('should insert values into BST', () => {
  bst.insert(15).insert(20).insert(10).insert(12)
  expect(bst.root.value).toBe(15);
  expect(bst.root.right.value).toBe(20);
  expect(bst.root.left.right.value).toBe(12);
});


test('should find values in a BST', () => {
  let foundNode1 = bst.find(10)
  let foundNode2 = bst.find(120)
  expect(foundNode1.value).toBe(10);
  expect(foundNode1.left).toBeNull();
  expect(foundNode1.right.value).toBe(12);
  expect(foundNode2).toBeUndefined();
});

test('should find values in a BST by pre-order', () => {
  bst.insert(1).insert(5).insert(50)
  expect(bst.DFSPreOrder()).toEqual([15, 10, 1, 5, 12, 20, 50]);
});

test('should find values in a BST by in-order', () => {
  expect(bst.DFSInOrder()).toEqual([1, 5, 10, 12, 15, 20, 50]);
});

test('should find values in a BST by post-order', () => {
  expect(bst.DFSPostOrder()).toEqual([5, 1, 12, 10, 50, 20, 15]);
});

test('should find values in a BST by breadth first', () => {
  expect(bst.breadthFirstSearch()).toEqual([15, 10, 20, 1, 12, 50, 5]);
});

test('should remove nodes in a BST', () => {
  expect(bst.remove(50).value).toBe(50);
  expect(bst.root.right.value).toBe(20);
  expect(bst.root.right.right).toBeNull();
  expect(bst.remove(500)).toBeUndefined();
  expect(bst.remove(5).value).toBe(5);
  expect(bst.root.left.left.value).toBe(1);
  expect(bst.root.left.left.right).toBeNull();

  bst = new BinarySearchTree();
  bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
  bst.remove(1);
  expect(bst.root.left.left.value).toBe(5);
  expect(bst.root.left.left.left).toBeNull();
  expect(bst.root.left.left.right).toBeNull();
  expect(bst.remove(20).value).toBe(20);
  expect(bst.root.right.value).toBe(50);
  expect(bst.root.right.right).toBeNull();
  expect(bst.root.right.left).toBeNull();

  bst = new BinarySearchTree();
  bst.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
  bst.insert(60).insert(30).insert(25).insert(23).insert(24).insert(70);
  bst.remove(10);
  expect(bst.root.left.value).toBe(1)
  expect(bst.root.left.left).toBeNull();
  expect(bst.root.left.right.value).toBe(5);
  expect(bst.root.left.right.right.value).toBe(12);
  expect(bst.remove(50).value).toBe(50);
  expect(bst.root.right.right.value).toBe(60);
  expect(bst.root.right.right.right.value).toBe(70);
  expect(bst.root.right.right.left.value).toBe(30);
});