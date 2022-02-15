#

# time: O(n)
# space: O(n/2) or O(n)
def singleNumber(self, nums):
  mem = set()
  for int in nums:
    if int in mem:
      mem.remove(int)
    else:
      mem.add(int)

  return mem.pop()