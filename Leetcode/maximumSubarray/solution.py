from cmath import inf


def solution(nums):
  sum = -inf
  largest = -inf
  for i in range(len(nums)):
    if nums[i] > sum:
      sum = nums[i]
    else:
      sum += nums[i]
    largest = max(sum, largest)
  return largest

test = solution([-2,1,-3,4,-1,2,1,-5,4])
expected = 6
print('success' if test == 6 else "failed. expected: {} but got: {}".format(expected, test))