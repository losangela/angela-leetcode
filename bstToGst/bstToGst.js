/*
========================================
================PROMPT==================
========================================

Given the root of a binary search tree with distinct values, modify it so that
every node has a new value equal to the sum of the values of the original tree
that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

class BSTNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
 

============Example 1============

       4(30)
     /      \
  1(36)      6(21)
 /  \        /  \
0    2(35) 5(26)  7 (15)
(36)  \            \
      3(33)        8 (8)

Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
Parenthesis in BST shows what result should be after function is run.
 

============Note============
The number of nodes in the tree is between 1 and 100.
Each node will have value between 0 and 100.
The given tree is a binary search tree.

*/

const bstToGst = function(root) {
  let adder = 0;
  const trans = node => {
    if (node === null || node.val === null) {
      return
    }
    trans(node.right)
    node.val += adder
    adder = node.val
    trans(node.left)
  }
  trans(root)
  return root
};

/*
========================================
================SOLUTION================
========================================
This solution uses recursion to transverse through the binary search tree and
change the values according to the prompt. The adder variable keeps track of
what the new node values need to be.

When the root is passed in through the helper function trans, it recurses through
to find the largest number in the BST. In this case 8. It then reassigns the value
to itself with the adder. Then adder is now reassigned to the current node's value.

The recursion order of this particular function would look like this:
Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
bstToGst(input)
trans(root 4)
  trans(right of 4 aka 6)
    trans(right of 6 aka 7) 
      trans(right of 7 aka 8) 
        trans(right of 8 aka null) RETURN
        reassign 8 to 8 + 0
        trans(left of 8 aka null) RETURN
      reassign 7 to 7 + 8
      trans(left of 7 aka null) RETURN
    reassign 6 to 6 + 15
    trans(left of 6 aka 5)
      trans(right of 5 aka null) RETURN
      reassign 5 to 5 + 21
      trans(left of 5 aka null) RETURN
  reassign 4 to 4 + 26
  trans(left of 4 aka 1)
    trans(right of 1 aka 2)
      trans(right of 2 aka 3)
        trans(right of 3 aka null) RETURN
        reassign 3 to 3 + 30
        trans(left of 3 aka null) RETURN
      reassign 2 to 2 + 33
      trans(left of 2 aka null) RETURN
    reassign 1 to 1 + 35
    trans(left of 1 aka 0)
      trans(right of 0 aka null) RETURN
      reassign 0 to 0 + 36
      trans(left of 0 aka null) RETURN
The call stack starts dequeueing at line 81.
*/