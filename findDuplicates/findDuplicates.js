/*
========================================
================PROMPT==================
========================================

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
some elements appear twice and others appear once.
Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?
*/

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

/*
========================================
================SOLUTION================
========================================
This solution is really simple and I'm not sure why it was categorized as a medium level problem.
I added a memoize array that keeps track of integers that appear in the input array. Since the 
constraint is that each number appears only once or twice, I only had to go through the input
array once and memoize the integers and push into the result if it hasn't been stored. I wrote
a few jest tests to make sure I'm getting the correct solution but honestly this is one of those
functions that don't even need jest testing. Now if the constraints were different and any integer
could appear any number of times, I would change the memoization object into an actual object instead
of an array and iterate through the memoized object to push a result, which would result in a O(n^2)
or O(nlogn) time complexity.

And then upon writing that paragraph and reading over other solutions, I realized another constraint
was to minimize space complexity which meant no traditional memoization techniques. Some of the
solutions I found was that since all integers in the array are positive, mark the visited ones negative
and if a searched index was found to contain a negative integer, it means it was visited.

Here is the code for that solution:

const findDuplicates = nums => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let position = Math.abs(nums[i]) - 1;
    if (nums[position] < 0) {
      result.push(position + 1);
    } else {
      nums[position] = -nums[position]
    }
  }
  return result
}

This works because another constraint of the prompt was that all the integers contained in the array
will not be greater than the size of the array. Therefore all integers contained in the array
will be a valid index for that array.
*/