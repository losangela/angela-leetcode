class Solution(object):
    def majorityElement(self, nums):
        candidate = nums[0]
        count = 1
        
        for int in nums[1:]:
            count += 1 if candidate == int else -1
            if count < 0:
                candidate = int
                count = 1
        
        return candidate
        