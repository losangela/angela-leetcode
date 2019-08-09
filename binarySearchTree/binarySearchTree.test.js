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