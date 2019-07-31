/* 
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the
elements in the subarray is less than k.

Example 1:

Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.


Note:

0 < nums.length <= 50000.
0 < nums[i] < 1000.
0 <= k < 10^6.
*/



const numSubarrayProductLessThanK = (nums, k) => {
  let left = 0;
  let acc = 1;
  let c = 0;
  for (let right = 0; right < nums.length; right++) {
    acc *= nums[right];
    while (acc >= k) {
      acc /= nums[left]
      left++
    }
    c += Math.max(0, right - left + 1);
  }
  return c
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100), `should equal to 8`)

/*
Input: nums = [10, 5, 2, 6], k = 100
Output: 8

We have 4 variables.
- left stands for left window index.
- acc stands for accumulator.
- c stands for count.
- right stands for right window index.

To explain it briefly, you're going to iterate through the input array and multiply its element by the accumulator.
If the result is less than k, increment count. If the result is greater than or equal to k, divide the accumulator
by the left window index element and increment left. At the end of the loop, the count will increment by how many
continuous multiples there were.

To explain step by step:
VARIABLES: left = 0; acc = 1; c = 0; right = 0;
Go through the for loop. Loop 1
 - acc *= nums[right] -> 1 * 10 -> 10
 - does not go through while loop
 - c += Math.max(0, right - left + 1) -> Math.max(0, 1) -> 1 + 0 -> 1
 - the subarray we added was [10]
Go through the loop again. VARIABLES: left = 0; acc = 10; c = 1; right = 1;
 - acc *= nums[right] -> 10 * 5 -> 50
 - does not go through while loop
 - c += Math.max(0, right - left + 1) -> Math.max(0, 2) -> 2 + 1 -> 3
 - the subarrays we added were [10, 5] and [5]
Go through the loop again. VARIABLES: left = 0; acc = 50; c = 3; right = 2;
 - acc *= nums[right] -> 50 * 2 -> 100
 - enter while loop
 - acc /= nums[left] -> 100 / nums[left] -> 100 / 10 -> 10
 - increment left by 1
 - c += Math.max(0, right-left+1) -> Math.max(0, 2) -> 2 + 3 -> 5
 - the subarrays we added were [5, 2] and [2]
Go through the loop again. VARIABLES: left = 1; acc = 10; c = 5; right = 3;
 - acc *= nums[right] -> 10 * 6 -> 60
 - does not go through while loop
 - c += Math.max(0, right-left+1) -> Math.max(0,3) -> 3 + 5 -> 8
 - the subarrays we added were [5, 2, 6], [2, 6], and [6].
Return c which has a value of 8

Why is line 35 the way it is? Why not just let c += right - left + 1?
One of the edge cases on leetcode was if k = 0. 
The output will be -6 if the input is num = [1, 2, 3] and k = 0. The answer should be 0.
*/