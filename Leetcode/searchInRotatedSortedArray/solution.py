
'''

does not pass all cases

def search(nums, target):
        start = -1
        left = 0
        right = len(nums) - 1
        
        # find starting index
        while (start < 0):
            if nums[left] <= nums[right]:
                start = left
                #break
            mid = (right + left) // 2
            if nums[mid] > nums[left]:
                left = mid + 1
            else:
                right = mid
                
        if nums[0] > target:
            left = start
            right = len(nums) - 1
            print('should print', left, right)
        if nums[0] < target:
            left = 0
            if start != 0:
                right = start - 1
            else:
                right = len(nums) - 1
        if nums[0] == target:
            return 0
        
        while (left < right):
            print(left, right)
            mid = (left + right) // 2
            if nums[mid] > target:
                right = mid
            if nums[mid] < target:
                left = mid + 1
            if nums[mid] == target:
                return mid
            
        if nums[left] == target:
            return left
        
        return -1
'''