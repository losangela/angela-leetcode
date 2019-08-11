const findDuplicates = nums => {
  let mem = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (mem[nums[i]]) {
      result.push(nums[i])
    } else {
      mem[nums[i]] = true
    }
  }
  return result
}

module.exports = findDuplicates