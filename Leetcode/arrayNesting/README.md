## About

- arrayNesting #565 https://leetcode.com/problems/array-nesting/submissions/
  - Dynamic programming, arrays, integers
  - Medium difficulty
  - Javascript, Go
  - Jest testing, Go testing


## Prompt

A zero-indexed array A of length N contains all integers from 0 to N-1. Find and return the longest
length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.

Suppose the first element in S starts with the selection of element A[i] of index = i, the next
element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy, we stop adding right before
a duplicate element occurs in S.

Example 1
```
Input: A = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

One of the longest S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
```
Note:
- N is an integer within the range [1, 20,000].
- The elements of A are all distinct.
- Each element of A is an integer within the range [0, N-1].

## Solution

The solution I had for this one was similar to the one on findDuplicates. Essentially, mark on the
original array a breadcrumb of where you've been by marking it negative since the constraint of the
problem is that the integers in the array are all positive and are less than the length of the array.

At first I made a duplicate of the array every time I tried to find a single solution (of many).
But then I realized that those that I've already visited will always have the same solution length
as the one before.

First I'll explain the solution to my code. We set a variable named longest to 0. Then we loop
through the input array with i and in that loop we declare size to 0. Then we search through with j
which will equal to i, and increment size as long as we haven't visited the array at index j. We
mark visited indexes with -1. Index j becomes whatever was inside index j in the array. Once we
reach a point where we visited the array at index j, or in other words once we find -1 in the array
with index j, we stop searching and compare longest to size, and allow it to be redeclared as the 
larger number of the two. After looping through the entire input array, we return longest.

Why do we not slice and modify the original input array?

Let's look at Input: A = [5,4,0,3,1,6,2].

The solutions for this would be:
```
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
S[1] = {A[1], A[4]} = {4, 1}
S[2] = {A[2], A[0], A[5], A[6]} = {0, 5, 6, 2}
S[3] = {A[3]} = {3}
S[4] = {A[4], A[1]} = {1, 4}
S[5] = {A[5], A[6], A[2], A[0]} = {6, 2, 0, 5}
S[6] = {A[6], A[2], A[0], A[5]} = {2, 0, 5, 6}
```
Notice that S[0], S[2], S[5], and S[6] solutions are the same but rotated numbers? For this reason
there is no reason to make a new copy of the array each time you iterate through and mark positions
passed. This cuts down on time complexity as well, so S[2], S[4], S[5], and S[6] never even have to
iterate through because their index will begin at -1.

## Observations
These are the runtime and memory usage of the solutions in each langauge.
```
RUNTIME      MEMORY      LANGUAGE
12ms         5.9mb        golang
16ms         5.9mb        golang
12ms         5.9mb        golang
72ms        36.9mb       javascript
76ms          37mb       javascript
72ms        36.8mb       javascript
```