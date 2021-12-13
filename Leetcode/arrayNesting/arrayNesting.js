const arrayNesting = function(nums) {
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let size = 0;
    for (let j = i; nums[j] >= 0; size++){
      let k = j
      j = nums[j]
      nums[k] = -1;
    }
    longest = Math.max(longest, size)
  }
  return longest
};

module.exports = arrayNesting