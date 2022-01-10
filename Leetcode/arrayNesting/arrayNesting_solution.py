def solution(nums):
  longest = 0
  for i in nums:
    count = 0
    while nums[i] > -1:
      nums[i], count, i = -1, count + 1, nums[i]
    if longest < count:
      longest = count

  return longest

print(solution([5,4,0,3,1,6,2]))
