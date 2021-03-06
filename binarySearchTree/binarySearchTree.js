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

  //should search through each node in the bst using pre-order depth first search and
  //return an array containing each node's value
  DFSPreOrder(node) {
    let arr = [];
    if (node === undefined) {
      arr.push(this.root.value)
      arr = arr.concat(this.DFSPreOrder(this.root.left))
      arr =arr.concat(this.DFSPreOrder(this.root.right))
    } else if (node) {
      arr.push(node.value)
      arr = arr.concat(this.DFSPreOrder(node.left))
      arr = arr.concat(this.DFSPreOrder(node.right))
    }
    return arr
  }
  
  // should search through each node in the bst using in-order depth first search and
  // return an array containing each node's value
  DFSInOrder(node) {
    let arr = [];
    if (node === undefined) {
      node = this.root
    }
    if (node.left) {
      arr = arr.concat(this.DFSInOrder(node.left))
      arr.push(node.value)
      arr = arr.concat(this.DFSInOrder(node.right))
    } else if (!node.left) {
      arr.push(node.value)
      if (node.right) {
        arr = arr.concat(this.DFSInOrder(node.right))
      }
    }
    return arr
  }

  //should search through each node in the bst using post-order depth first search and
  // return an array containing each node's value.
  DFSPostOrder(node) {
    let arr = [];
    if (node === undefined) {
      node = this.root
    } else if (node === null) {
      return arr
    }
    arr = arr.concat(this.DFSPostOrder(node.left))
    arr = arr.concat(this.DFSPostOrder(node.right))
    arr.push(node.value)
    return arr
  }

  //should search through each node in the bst using breadth first search and
  //return an array containing each node's value.
  breadthFirstSearch() {
    let order = [this.root];
    let arr = [];
    for (let i = 0; i < order.length; i++) {
      if (order[i].left) {
        order.push(order[i].left)
      } if (order[i].right) {
        order.push(order[i].right)
      } 
      arr.push(order[i].value);
    }
    return arr
  }

  // should remove a node from a bst. function should be able to handle removal of the root
  // node, removal of a node with one ChannelSplitterNode, and removal of a node with two children.
  // function should return the node removed.
  remove(value) {
    let node = this.root;
    let parent;
    let found = false;
    while (!found) {
      if (node === null && value) {
        found = true;
        node = undefined;
      } else if (node.value === value) {
        found = true;
      } else if (node.value < value) {
        parent = node;
        node = node.right;
      } else if (node.value > value) {
        parent = node;
        node = node.left;
      }
    }
    if (node === undefined) {
      return undefined
    }
    if (!parent) {
      let remainder;
      let newParent = this.root;
      let found = false;
      if (node.left) {
        this.root = node.left;
        remainder = node.right;
      } else if (node.right) {
        this.root = node.right;
        remainder = node.left
      }
      while (!found) {
        if (remainder.value > newParent.value) {
          if (newParent.right) {
            newParent = newParent.right
          } else {
            found = true;
            newParent.right = remainder;
          }
        } else if (remainder.value < newParent.value) {
          if (newParent.left) {
            newParent = newParent.left
          } else {
            found = true;
            newParent.left = remainder;
          }
        }
      }
    } else {
      if (node.right && node.left) {
        if (node.left.value < parent.value) {
          parent.left = node.left;
          let newParent = parent.left;
          let found = false;
          while (!found) {
            if (newParent.right) {
              if (node.right.value > newParent.right.value) {
                newParent = newParent.right
              }
            } else {
              found = true;
              newParent.right = node.right;
            }
          }
        } else {
          parent.right = node.right;
          let newParent = parent.right;
          let found = false;
          while (!found) {
            if (newParent.left) {
              if (node.left.value < newParent.left.value) {
                newParent = newParent.left;
              }
            } else {
              found = true;
              newParent.left = node.left;
            }
          }

        }
      } else if (node.right) {
        if (node.right.value < parent.value) {
          parent.left = node.right;
        } else {
          parent.right = node.right;
        }
      } else if (node.left) {
        if (node.left.value < parent.value) {
          parent.left = node.left;
        } else {
          parent.right = node.left;
        }
      } else {
        parent.right = null;
        parent.left = null;
      }
    }
    node.left = null;
    node.right = null;
    return node;
  }
}

module.exports = BinarySearchTree