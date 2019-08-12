class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class PriorityQueue{
  constructor(k) {
    this.front = null;
    this.length = 0;
    this.limit = k;
  }
  
  enqueue(val) {
    let newNode = new Node(val)
    if (this.front === null) {
      this.front = newNode
      this.length++
    } else {
      if (this.length === this.limit) {
        let replaceNode = this.front;
        let parent;
        let found = false;
        while (!found) {
          if (replaceNode.val <= val && replaceNode.next) {
            parent = replaceNode;
            replaceNode = replaceNode.next;
          } else if (replaceNode.val <= val && !replaceNode.next) {
            replaceNode.next = newNode;
            this.front = this.front.next
            found = true
          } else if (replaceNode.val > val && parent) {
            newNode.next = replaceNode;
            parent.next = newNode;
            this.front = this.front.next;
            found = true
          } else {
            return
          }
        }
      } else if (this.length < this.limit) {
        let current = this.front;
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
              this.front = newNode;
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
  let pq = new PriorityQueue(k)
  for (let i = 0; i < nums.length; i++) {
      pq.enqueue(nums[i])
  }
  return pq.front.val
};

module.exports = findKthLargest