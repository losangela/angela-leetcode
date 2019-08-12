class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList{
  constructor(k) {
    this.head = null;
    this.length = 0;
    this.limit = k;
  }
  
  add(val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
      this.length++
    } else {
      if (this.length === this.limit) {
        let replaceNode = this.head;
        let parent;
        let found = false;
        while (!found) {
          if (replaceNode.val <= val && replaceNode.next) {
            parent = replaceNode;
            replaceNode = replaceNode.next;
          } else if (replaceNode.val <= val && !replaceNode.next) {
            replaceNode.next = newNode;
            this.head = this.head.next
            found = true
          } else if (replaceNode.val > val && parent) {
            newNode.next = replaceNode;
            parent.next = newNode;
            this.head = this.head.next;
            found = true
          } else {
            found = true
          }
        }
      } else if (this.length < this.limit) {
        let current = this.head;
        let parent;
        let found = false;
        while (!found) {
          if (current.val < val) {
            if (current.next) {
              parent = current;
              current = current.next
            } else {
              let afterCurr = current.next;
              current.next = newNode;
              newNode.next = afterCurr;
              if (parent) {
                parent.next = newNode;
              }
              found = true;
            }
          } else if (current.val >= val) {
            newNode.next = current;
            if (parent) {
              parent.next = newNode;
            } else {
              this.head = newNode;
            }
          found = true
          }
        }
      this.length++
      }
    }
  }
}
var findKthLargest = function(nums, k) {
  let ll = new LinkedList(k)
  for (let i = 0; i < nums.length; i++) {
      ll.add(nums[i])
  }
  return ll.head.val
};

module.exports = findKthLargest