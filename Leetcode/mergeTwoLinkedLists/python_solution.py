# You are given the heads of two sorted linked lists list1 and list2.

# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

# Return the head of the merged linked list.

# Example 1:
# Input: list1 = [1,2,4], list2 = [1,3,4]
# Output: [1,1,2,3,4,4]

# Example 2:
# Input: list1 = [], list2 = []
# Output: []

# Example 3:
# Input: list1 = [], list2 = [0]
# Output: [0]

class ListNode(object):
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class Solution(object):
  def mergeTwoLists(list1, list2):
    newHead = ListNode(0)
    newPointer = newHead
    
    while list1 and list2:
      if list1.val < list2.val:
        newPointer.next = list1
        newPointer = newPointer.next
        list1 = list1.next
      else:
        newPointer.next = list2
        newPointer = newPointer.next
        list2 = list2.next
            
    if list1:
      newPointer.next = list1
    if list2:
      newPointer.next = list2
        
    return newHead.next