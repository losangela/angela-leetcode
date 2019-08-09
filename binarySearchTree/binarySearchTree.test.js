const BinarySearchTree = require('./binarySearchTree.js');

let bst = new BinarySearchTree ()

test('should insert values into BST', () => {
  bst.insert(15).insert(20).insert(10).insert(12)
  expect(bst.root.value).toBe(15);
  expect(bst.root.right.value).toBe(20);
  expect(bst.root.left.right.value).toBe(12);
});