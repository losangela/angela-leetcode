const twoSum = (nums, target) => {
  const storage = {};
  
  for (let i = 0; i < nums.length; i++) {
      if (typeof storage[target - nums[i]] === 'number') {
          return [storage[target - nums[i]], i]
      } else {
          storage[nums[i]] = i
      }
  }
}