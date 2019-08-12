## About

- findKthLargest #215 https://leetcode.com/problems/kth-largest-element-in-an-array/
  - linked list, priority queue
  - Medium difficulty
  - Javascript, Go
  - Jest testing, Go testing


## Prompt

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the
sorted order, not the kth distinct element.

Example 1
```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```

Example 2
```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```
Note:
- You may assume k is always valid, 1 ≤ k ≤ array's length.

## Solution

I saw two ways of solving for this problem. The easy solution would be to sort the array and find the K largest
by index. The other solution would be to put a priority queue with a sest length and iterate through the input
array and then at the end return the first in the priority queue. This solution has better time and space
complexity. I made a priority queue with a linked list implementation. The priority queue's stack limit is
declared by the K that is passed in.

For example 1, we have Input: [3,2,1,5,6,4] and k = 2 and we have Output: 5
First We declare a priority queue with a length limit of 2. Then we iterate through the input array and enqueue
each value into the priority queue.
```
arr[0] enqueue: 3
      length of 1
arr[1] enqueue: 2 -> 3
      length of 2 (max length reached)
arr[2] enqueue: 2 -> 3
      nothing changed because 1 is less than the smallest number in the priority queue.
arr[3] enqueue: 3 -> 5
      the new top of the queue is 3 which links to 5 while the length maintains itself.
arr[4] enqueue: 5 -> 6
      again, the new top of the queue is now 5 which links to 6 while the length remains 2.
arr[5] enqueue: 5 -> 6
      nothing changed because 4 is less than the smallest number in the priority queue.
```
We have finished iterating through the input array. Return the front of the queue which is 5.

## Observations
These are the runtime and memory usage of the solutions in each langauge.
```
RUNTIME      MEMORY      LANGUAGE
56ms        36.6mb       javascript
60ms        36.7mb       javascript
64ms        36.7mb       javascript
```