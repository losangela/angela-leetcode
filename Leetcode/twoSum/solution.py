class Solution(object):
    def twoSum(self, nums, target):
        mem = {}
        for i in range(len(nums)):
            if target - nums[i] in mem:
                return [mem[target-nums[i]], i]
            else:
                mem[nums[i]] = i