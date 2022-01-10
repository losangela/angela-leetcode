def productExceptSelf(nums):
  answer = []
  acc = 1
  for i in range(len(nums)):
    answer.append(acc)
    acc *= nums[i]
  
  acc = 1
  for i in reversed(range(len(nums))):
    answer[i] *= acc
    acc *= nums[i]
      
  return answer

input = [1,2,3,4]
print(productExceptSelf(input), "should be", [24,12,8,6])