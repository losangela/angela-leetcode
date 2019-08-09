/* 
Binary search tree functions
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // should accept a value and insert it into the BST in the correct position.
  // should return the BST
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value)
    } else {
      let parent = this.root;
      let done = false;
      while (!done) {
        if (parent.value < value) {
          if (parent.right) {
            parent = parent.right
          } else {
            done = true;
            parent.right = new Node(value)
          }
        } else if (parent.value > value) {
          if (parent.left) {
            parent = parent.left
          } else {
            done = true;
            parent.left = new Node(value)
          }
        } else if (parent.value === value) {
          done = true;
        }
      }
    }
    return this
  }

  // should find a node in a bst. should return node if found, otherwise return undefined.
  // should be solved using iteration or recursion
  find(value) {
    let node = this.root;
    let done = false;
    while (!done) {
      if (node.value === value) {
        done = true
      } else if (node.value < value) {
        if (node.right) {
          node = node.right
        } else {
          done = true;
          node = undefined
        }
      } else if (node.value > value) {
        if (node.left) {
          node = node.left;
        } else {
          done = true;
          node = undefined;
        }
      }
    }
    return node;
  }

}

module.exports = BinarySearchTree