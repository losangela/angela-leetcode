## About

- countBattleships #419 https://leetcode.com/problems/battleships-in-a-board/
  - Matrix
  - Medium difficulty
  - Javascript, Go
  - Jest testing, Go testing

## Prompt

Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
 - You receive a valid board, made of only battleships or empty slots.
 - Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
 - At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
```
X..X
...X
...X

There are 2 battleships in this matrix.
```

Invalid Example:
```
...X
XXXX
...X
This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
```

Follow up:
Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?

## Solution

Given the constraints this problem is actually very simple. All you need to do is loop through the matrix by rows and columns.
Once the index square you're in is marked as a ship 'X', check the right and bottom to see if it's not an 'X'. If it isn't, then
it's the end of the ship. Recall that there is always an empty space between all ships and and that ships can only be placed
horizontally and vertically. 

## Observations
These are the runtime and memory usage of the solutions in each langauge.
```
RUNTIME      MEMORY      LANGUAGE
 0ms         2.4mb        golang
 0ms         2.4mb        golang
 0ms         2.4mb        golang
48ms        36.4mb       javascript
56ms        36.5mb       javascript
48ms        36.4mb       javascript
```