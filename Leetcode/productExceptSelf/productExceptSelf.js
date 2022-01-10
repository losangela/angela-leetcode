const productExceptSelf = (nums) => {
  let m = [1];
  for (let i = 1; i < nums.length; i++) {
    m[i] = m[i-1] * nums[i-1]
  }
  let t = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    t *= nums[i]
    m[i-1] *= t
  }
  return m
};

console.log(productExceptSelf([1,2,3,4]), `should be [24,12,8,6]`)
