class ListNode(object):
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class Solution(object):
  def swapPairs(head):
    newHead = ListNode(0)
    prev = newHead
    flip1 = head
    flip2 = head.next if head else None
    next = flip2.next if flip2 else None

    while flip2:
      prev.next = flip2
      flip2.next = flip1
      flip1.next = next
      prev = flip1
      flip1 = next
      flip2 = next.next if next else None
      next = flip2.next if flip2 else None
        
    return newHead.next or head