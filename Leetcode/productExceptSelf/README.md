## About

- Product of Array Except Self #238 https://leetcode.com/problems/product-of-array-except-self/submissions/

## Prompt

Given an array nums of n integers where n > 1, return an array output such that output[i] is
equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra
space for the purpose of space complexity analysis.)

## Solution

The way to go about this is to multiply from every element of the arrayon the left and every element of the array on the right.

We have an input of [1,2,3,4]

So in the array that we return, we first want to multiply every element of the array on its left.

After the first for loop is run, our output array is [1, 1, 2, 6].

    - Break down step by step:
    - Output array[0] is 1 by default.
    - Output array[1] is output array [0] multiplied by input array [0].
        - Why? The only left element at index of 1 is just the value 1.
    - Output array[2] is output array [1] multiplied by input array [1].
        - Why? The only left element at index of 2 is the values 1 and 2.
        - Those values are included in output array [1] (1) and input array [1] (2).
    - Output array[3] is output array[2] multiplied by input array[2].
        - Why? The only left element at index of 3 is the values 1, 2, and 3.
        - Those values are included in output array [2] (1 * 2) and input array [2] (3).

Now we have to multiply every element of the array on its right.

Remember our current output array is [1, 1, 2, 6].

After the second loop is run, our output array is [24, 12, 8, 6]

    - Break down step by step:
    - We have a helper variable named t which is default to 1.
    - We loop backwards through the array this time.
    - Our helper variable t keeps track of all the multiples on the "right". We start at 1.
    - Starting from the end, t is now multiplied by the last element of the original input.
        - i = 3
        - t = 1 * input array [3] -> 1 * 4 -> 4
    - Then we set output array [i-1] to multiply by t.
        - output array [i-1] = 2 * t -> 2 * 4 -> 8
    - Now we decrement i and go through the loop again.
        - i = 2
        - t = 1 * 4 * input array [2] -> 1 * 4 * 3 -> 12
        - output array [i - 1] = 1 * t -> 1 * 12 -> 12
    - Decrement i and go through the loop again.
        - i = 1
        - t = 1 * 4 * 3 * input array [1] -> 1 * 4 * 3 * 2 -> 24
        - output array [i - 1] = 1 * t -> 1 * 24 -> 24

And there you have it. Answer is [24, 12, 8, 6]